import { Repository } from "typeorm"
import { AppDataSource } from "../../../data-source"
import { Users } from "../../../entities/entities"
import { ContactUsers } from "../../../entities/entities.contact"
import { AppError } from "../../../errors/error"

const getContactByUser = async(userId: number): Promise<ContactUsers[]> =>{

  const useRepository :Repository<Users> = AppDataSource.getRepository(Users);

  const userFind:Users | null  = await useRepository.createQueryBuilder("Users")
  .where("Users.id = :userId", { userId })
  .leftJoinAndSelect("Users.contacts", "contacts")
  .getOne();

  if(!userFind){
    throw new AppError("User not found", 404);
  }
  return userFind.contacts
}

export { getContactByUser }
