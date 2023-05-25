import { Router } from "express";
import { updateContactController } from "../../controllers/Contact/Contact update/contactUpdate";
import { checkEmailMiddle } from "../../middleware/checkEmail/checkEmail.middleware";
import { verifyTokenIsValid } from "../../middleware/checkToken/checkToken.Middle";

const updateContactRoutes:Router = Router()
updateContactRoutes.patch("/:id",verifyTokenIsValid,checkEmailMiddle, updateContactController  )

 export { updateContactRoutes };

