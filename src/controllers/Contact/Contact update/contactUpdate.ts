import { Request, Response } from "express";
import { updateContactUser } from "../../../service/contact user/updated Contact/update.Contact.service";

const updateContactController = async (req: Request, resp: Response) => {
 
  const updatedContact = await updateContactUser(parseInt(req.params.id), req.body, req.user.id);

  return resp.status(200).json(updatedContact);
};

export { updateContactController };

