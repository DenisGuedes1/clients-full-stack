import { Router } from "express"

import { deleteContactController } from "../../controllers/Contact/Delete Contact/deleteContact.controller"
import {
  verifyTokenIsValid
} from "../../middleware/checkToken/checkToken.Middle"


const contactDeleteRouter:Router = Router()

contactDeleteRouter.delete('/:id',verifyTokenIsValid,deleteContactController)

export { contactDeleteRouter }

