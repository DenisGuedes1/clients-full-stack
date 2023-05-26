"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactUserRoutes = void 0;
const express_1 = require("express");
const getAllContact_controller_1 = require("../../controllers/Contact/Get Contact/getAllContact.controller");
const checkToken_Middle_1 = require("../../middleware/checkToken/checkToken.Middle");
const getContactUserRoutes = (0, express_1.Router)();
exports.getContactUserRoutes = getContactUserRoutes;
getContactUserRoutes.get("", checkToken_Middle_1.verifyTokenIsValid, getAllContact_controller_1.getContactByUserController);
