import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/entities";
import { AppError } from "../../errors/error";

const checkEmailMiddle = async (req: Request, resp:Response, next: NextFunction)=>{

  if(!req.body.email){
    return next()

  }
  const {email} = req.body
  const userRepository = AppDataSource.getRepository(Users)
  const duplicatedEmail = await userRepository.findOne({where:{email}});
  if(duplicatedEmail){
    throw new AppError("Email already exists", 409);
  }
  return next()

}
export { checkEmailMiddle };

