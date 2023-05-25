import { Request, Response } from "express"
import { getInfoUserService } from "../../service/get users/get.users.service"

const getUserInfoController = async(req:Request, resp:Response)=>{

    const userId = req.user.id
    const userInfo = await getInfoUserService(userId)
    return resp.status(200).json(userInfo)

}

export { getUserInfoController }

