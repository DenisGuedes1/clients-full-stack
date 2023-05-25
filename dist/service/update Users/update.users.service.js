"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities/entities");
const error_1 = require("../../errors/error");
const schemaCreated_users_1 = require("../../schema/schemaCreated.users");
const updateUserService = (userData, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.Users);
    const userToUpdate = yield userRepository.findOne({
        where: {
            id: idUser,
        },
    });
    if (!userToUpdate) {
        throw new error_1.AppError("User not found", 404);
    }
    const updateUser = userRepository.merge(userToUpdate, userData);
    if (userToUpdate.phone && typeof userToUpdate.phone === 'string') {
        const parsedPhone = parseInt(userToUpdate.phone);
        if (!isNaN(parsedPhone)) {
            userToUpdate.phone = parsedPhone;
        }
        else {
            throw new error_1.AppError('Invalid phone number', 400);
        }
    }
    yield userRepository.save(updateUser);
    const user = schemaCreated_users_1.returnUsersCreatedWithoutPassword.parse(updateUser);
    return user;
});
exports.updateUserService = updateUserService;
