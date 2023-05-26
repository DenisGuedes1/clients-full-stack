"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRouter = void 0;
const express_1 = require("express");
const deleteUser_controller_1 = require("../controllers/delete user/deleteUser.controller");
const checkToken_Middle_1 = require("../middleware/checkToken/checkToken.Middle");
const deleteUserRouter = (0, express_1.Router)();
exports.deleteUserRouter = deleteUserRouter;
deleteUserRouter.delete('', checkToken_Middle_1.verifyTokenIsValid, deleteUser_controller_1.deleteUserController);
