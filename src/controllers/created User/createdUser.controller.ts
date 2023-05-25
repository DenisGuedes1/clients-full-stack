import { Request, Response } from "express";
import { createdUserService } from "../../service/Created user/createdUser.service";

const createdUserController = async(req:Request, resp:Response) =>{

  const userData = req.body
 
  
  const createdNewUser = await createdUserService(userData)
  return resp.status(201).json(createdNewUser)

}
export { createdUserController };

