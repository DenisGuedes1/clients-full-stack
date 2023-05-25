import { Router } from "express";
import { deleteUserController } from "../controllers/delete user/deleteUser.controller";
import { verifyTokenIsValid } from "../middleware/checkToken/checkToken.Middle";

const deleteUserRouter:Router = Router()
deleteUserRouter.delete('',verifyTokenIsValid, deleteUserController )

export { deleteUserRouter };


