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
exports.createdContactController = void 0;
const created_contactUser_service_1 = require("../../../service/contact user/Created Contact/created contact/created.contactUser.service");
const createdContactController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const userId = req.user.id;
    const createdNewContact = yield (0, created_contactUser_service_1.createdContactUser)(contactData, userId);
    return resp.status(201).json(createdNewContact);
});
exports.createdContactController = createdContactController;
