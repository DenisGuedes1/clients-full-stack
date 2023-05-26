import { Request, Response } from "express";
import { getContactByUser } from "../../../service/contact user/Get All contact user/getAll.contact.service";

const getContactByUserController = async (req: Request, resp:Response) =>{
  const returnGet = await getContactByUser(req.user.id)

  return resp.status(200).json(returnGet)

}

export { getContactByUserController };
