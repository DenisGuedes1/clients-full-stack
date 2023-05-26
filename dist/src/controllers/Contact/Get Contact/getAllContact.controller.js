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
exports.getContactByUserController = void 0;
const getAll_contact_service_1 = require("../../../service/contact user/Get All contact user/getAll.contact.service");
const getContactByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const returnGet = yield (0, getAll_contact_service_1.getContactByUser)(req.user.id);
    return resp.status(200).json(returnGet);
});
exports.getContactByUserController = getContactByUserController;
