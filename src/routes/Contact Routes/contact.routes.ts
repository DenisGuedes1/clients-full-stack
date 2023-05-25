import { Router } from "express"
import { createdContactController } from "../../controllers/Contact/created Contact/createdContact.controller"
import { checkEmailMiddle } from "../../middleware/checkEmail/checkEmail.middleware"
import {
  verifyTokenIsValid
} from "../../middleware/checkToken/checkToken.Middle"
import { validateDataMiddleware } from "../../middleware/validateData/validatedData.Middle"
import { createUserContactSchema } from "../../schema/schemaContact.Users"

const contactRouter:Router = Router()

contactRouter.post('',verifyTokenIsValid,checkEmailMiddle,validateDataMiddleware(createUserContactSchema), createdContactController)

export { contactRouter }

