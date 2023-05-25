import { Router } from "express";

import { userUpdateController } from "../controllers/update.User/update.User.controller";
import { checkEmailMiddle } from "../middleware/checkEmail/checkEmail.middleware";
import { verifyTokenIsValid } from "../middleware/checkToken/checkToken.Middle";
import { validateDataMiddleware } from "../middleware/validateData/validatedData.Middle";
import { partialUpdateUsers } from "../schema/schemaCreated.users";

export const updatedRouter:Router = Router()

updatedRouter.patch('',verifyTokenIsValid, validateDataMiddleware(partialUpdateUsers),checkEmailMiddle, userUpdateController)


