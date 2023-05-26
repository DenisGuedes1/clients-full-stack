import { Router } from "express";
import { getContactByUserController } from "../../controllers/Contact/Get Contact/getAllContact.controller";
import { verifyTokenIsValid } from "../../middleware/checkToken/checkToken.Middle";

const getContactUserRoutes:Router = Router()
getContactUserRoutes.get("", verifyTokenIsValid, getContactByUserController)

 export { getContactUserRoutes };

