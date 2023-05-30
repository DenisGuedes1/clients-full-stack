import { Request, Response } from "express";
import { deleteContactUserService } from "../../../service/contact user/Delete Contact/deleteContact.service";

const deleteContactController = async (req: Request, resp: Response) => {
  try {
    await deleteContactUserService(parseInt(req.params.id), req.user.id);
     resp.sendStatus(204)
    
  } catch (error:any) {
    resp.status(error.statusCode || 500).json({ message: error.message });

  }

};

export { deleteContactController };

