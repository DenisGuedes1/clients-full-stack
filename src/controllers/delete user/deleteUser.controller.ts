import { Request, Response } from 'express';
import { AppError } from '../../errors/error';
import { deleteUserService } from '../../service/delete users/deleteUsers.service';

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    await deleteUserService(userId);
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    throw new AppError("User not exists", 404)

  }
};

export { deleteUserController };

