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
exports.createdUserController = void 0;
const createdUser_service_1 = require("../../service/Created user/createdUser.service");
const createdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const createdNewUser = yield (0, createdUser_service_1.createdUserService)(userData);
    return resp.status(201).json(createdNewUser);
});
exports.createdUserController = createdUserController;
