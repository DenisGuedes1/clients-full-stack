import { Router } from 'express'
import { createdUserController } from '../controllers/created User/createdUser.controller'
import { checkEmailMiddle } from '../middleware/checkEmail/checkEmail.middleware'
import { validateDataMiddleware } from '../middleware/validateData/validatedData.Middle'
import { createUserSchema } from '../schema/schemaCreated.users'
const userRouter: Router = Router()

userRouter.post('',validateDataMiddleware(createUserSchema), checkEmailMiddle,createdUserController)

export default userRouter