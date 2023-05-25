import { Request, Response } from "express"
import { createdContactUser } from "../../../service/contact user/Created Contact/created contact/created.contactUser.service"

const createdContactController = async (req:Request, resp:Response) =>{

  const contactData = req.body
  const userId = req.user.id

  const createdNewContact = await createdContactUser(contactData,userId)

  return resp.status(201).json(createdNewContact)
}

export { createdContactController }

