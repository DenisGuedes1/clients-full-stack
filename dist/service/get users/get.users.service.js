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
exports.getInfoUserService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities/entities");
const error_1 = require("../../errors/error");
const getInfoUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.Users);
    const userFind = yield userRepository
        .createQueryBuilder("Users")
        .where("Users.id = :id", { id: userId })
        .leftJoinAndSelect("Users.contacts", "contacts")
        .getOne();
    if (!userFind) {
        throw new error_1.AppError("User not found", 404);
    }
    return userFind;
});
exports.getInfoUserService = getInfoUserService;
