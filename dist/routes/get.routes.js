"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouterInfoUser = void 0;
const express_1 = require("express");
const getUser_controller_1 = require("../controllers/get User/getUser.controller");
const checkToken_Middle_1 = require("../middleware/checkToken/checkToken.Middle");
const getRouterInfoUser = (0, express_1.Router)();
exports.getRouterInfoUser = getRouterInfoUser;
getRouterInfoUser.get('', checkToken_Middle_1.verifyTokenIsValid, getUser_controller_1.getUserInfoController);
