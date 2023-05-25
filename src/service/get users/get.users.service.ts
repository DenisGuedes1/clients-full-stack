import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/entities";
import { AppError } from "../../errors/error";
import { TgetUsersOffpass } from "../../interfaces/interfaces.CreatedUser";

const getInfoUserService = async (userId:number): Promise<TgetUsersOffpass> =>{

  const userRepository: Repository<Users>= AppDataSource.getRepository(Users)

  const userFind: Users | null = await userRepository
  .createQueryBuilder("Users")
  .where("Users.id = :id", { id: userId })
  .leftJoinAndSelect("Users.contacts", "contacts")
  .getOne();

 
  if(!userFind){
    throw new AppError("User not found", 404)
  }
  return userFind
} 

export { getInfoUserService };

