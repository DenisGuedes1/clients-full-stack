"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactDeleteRouter = void 0;
const express_1 = require("express");
const deleteContact_controller_1 = require("../../controllers/Contact/Delete Contact/deleteContact.controller");
const checkToken_Middle_1 = require("../../middleware/checkToken/checkToken.Middle");
const contactDeleteRouter = (0, express_1.Router)();
exports.contactDeleteRouter = contactDeleteRouter;
contactDeleteRouter.delete('/:id', checkToken_Middle_1.verifyTokenIsValid, deleteContact_controller_1.deleteContactController);
