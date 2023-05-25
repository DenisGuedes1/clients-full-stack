import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Users } from "../../entities/entities"
import { AppError } from "../../errors/error"

const deleteUserService = async (userId:number): Promise<void> =>{

  const userRepository: Repository<Users> = AppDataSource.getRepository(Users)

  const usertoDelete = await userRepository.findOne({where:{id: userId}})

  if(!usertoDelete){
    throw new AppError('User not found', 404);
  }
  await userRepository.remove(usertoDelete);
}
export { deleteUserService }
