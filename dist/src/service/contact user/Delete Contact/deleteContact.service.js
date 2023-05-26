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
exports.deleteContactUserService = void 0;
const data_source_1 = require("../../../data-source");
const entities_contact_1 = require("../../../entities/entities.contact");
const error_1 = require("../../../errors/error");
const deleteContactUserService = (contactId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(entities_contact_1.ContactUsers);
    const contact = yield contactRepository.findOne({ where: { id: contactId } });
    if (!contact) {
        throw new error_1.AppError("Contact not found", 404);
    }
    const cont = yield contactRepository
        .createQueryBuilder("contact")
        .leftJoinAndSelect("contact.user", "user")
        .where("contact.id = :contactId", { contactId })
        .andWhere("user.id = :userId", { userId })
        .getOne();
    if (!cont) {
        throw new error_1.AppError('Contact not found', 404);
    }
    yield contactRepository.delete(contactId);
    return { message: "Contact deleted successfully" };
});
exports.deleteContactUserService = deleteContactUserService;
