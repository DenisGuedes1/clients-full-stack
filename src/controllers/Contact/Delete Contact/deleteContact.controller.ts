import { Request, Response } from "express";
import { deleteContactUserService } from "../../../service/contact user/Delete Contact/deleteContact.service";

const deleteContactController = async (req: Request, resp: Response) => {

  const updatedContact = await deleteContactUserService(parseInt(req.params.id), req.user.id);

  return resp.status(200).json(updatedContact);
};

export { deleteContactController };

