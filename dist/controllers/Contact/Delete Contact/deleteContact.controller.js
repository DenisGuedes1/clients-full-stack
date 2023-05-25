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
exports.deleteContactController = void 0;
const deleteContact_service_1 = require("../../../service/contact user/Delete Contact/deleteContact.service");
const deleteContactController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id, "id rota");
    console.log(req.user.id, "id do usuario");
    const updatedContact = yield (0, deleteContact_service_1.deleteContactUserService)(parseInt(req.params.id), req.user.id);
    return resp.status(200).json(updatedContact);
});
exports.deleteContactController = deleteContactController;
