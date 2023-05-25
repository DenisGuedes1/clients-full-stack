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
exports.userUpdateController = void 0;
const update_users_service_1 = require("../../service/update Users/update.users.service");
const userUpdateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = req.user.id;
    const userUpd = yield (0, update_users_service_1.updateUserService)(req.body, idUser);
    return resp.status(200).json(userUpd);
});
exports.userUpdateController = userUpdateController;
