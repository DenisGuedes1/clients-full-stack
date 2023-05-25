import { Router } from "express";
import { loginController } from "../controllers/login.User/login.User.Controller";
import { validateDataMiddleware } from "../middleware/validateData/validatedData.Middle";
import { createdLoginSchema } from "../schema/login.Schema";

const loginRouter:Router = Router()
loginRouter.post('', validateDataMiddleware(createdLoginSchema), loginController)

export { loginRouter };

