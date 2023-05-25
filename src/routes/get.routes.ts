import { Router } from "express";
import { getUserInfoController } from "../controllers/get User/getUser.controller";
import { verifyTokenIsValid } from "../middleware/checkToken/checkToken.Middle";

const getRouterInfoUser:Router = Router()
getRouterInfoUser.get('',verifyTokenIsValid, getUserInfoController )

export { getRouterInfoUser };


