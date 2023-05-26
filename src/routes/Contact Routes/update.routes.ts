import { Router } from "express";
import { updateContactController } from "../../controllers/Contact/Contact update/contactUpdate";
import { getContactByUserController } from "../../controllers/Contact/Get Contact/getAllContact.controller";
import { checkEmailMiddle } from "../../middleware/checkEmail/checkEmail.middleware";
import { verifyTokenIsValid } from "../../middleware/checkToken/checkToken.Middle";

const updateContactRoutes:Router = Router()
updateContactRoutes.patch("/:id",verifyTokenIsValid,checkEmailMiddle, updateContactController)
updateContactRoutes.get("", verifyTokenIsValid, getContactByUserController)

 export { updateContactRoutes };

