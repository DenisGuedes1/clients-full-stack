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
exports.createdContactUser = void 0;
const data_source_1 = require("../../../../data-source");
const entities_1 = require("../../../../entities/entities");
const entities_contact_1 = require("../../../../entities/entities.contact");
const error_1 = require("../../../../errors/error");
const schemaContact_Users_1 = require("../../../../schema/schemaContact.Users");
const createdContactUser = (contactData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_contact_1.ContactUsers);
    const contact = contactRepository.create(contactData);
    const existingEmail = yield contactRepository.findOne({ where: { email: contactData.email } });
    if (existingEmail) {
        throw new error_1.AppError("Email already exists", 409);
    }
    const existingPhone = yield contactRepository.findOne({ where: { phone: contactData.phone } });
    if (existingPhone) {
        throw new error_1.AppError("Phone already exists", 409);
    }
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.Users);
    const user = yield userRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    contact.user = user;
    yield contactRepository.save(contact);
    const newContact = schemaContact_Users_1.returnCreatedContactUser.parse(contact);
    const contactWithUserId = Object.assign(Object.assign({}, newContact), { userId: user.id });
    return contactWithUserId;
});
exports.createdContactUser = createdContactUser;
