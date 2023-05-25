import { Request, Response } from "express"
import { updateUserService } from "../../service/update Users/update.users.service"

const userUpdateController= async (req: Request, resp: Response)=>{

  const idUser = req.user.id
  const userUpd = await updateUserService(req.body, idUser)
  return resp.status(200).json(userUpd)
}

export { userUpdateController }

