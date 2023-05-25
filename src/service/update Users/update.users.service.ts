import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/entities'
import { AppError } from '../../errors/error'
import { TupdateUser } from '../../interfaces/interfaces.CreatedUser'
import { returnUsersCreatedWithoutPassword } from '../../schema/schemaCreated.users'

const updateUserService = async(userData: Partial<any>, idUser: number):Promise<TupdateUser> =>{

  const userRepository: Repository<Users> = AppDataSource.getRepository(Users)

  const userToUpdate = await userRepository.findOne({
    where:{
      id: idUser,
    },
  });

  if (!userToUpdate){
    throw new AppError("User not found", 404)

  }
 
  
  const updateUser = userRepository.merge(userToUpdate, userData)
  if (userToUpdate.phone && typeof userToUpdate.phone === 'string') {
    const parsedPhone = parseInt(userToUpdate.phone);
    if (!isNaN(parsedPhone)) {
      userToUpdate.phone = parsedPhone;
    } else {
      throw new AppError('Invalid phone number', 400);
    }
  }
  await userRepository.save(updateUser)
  const user = returnUsersCreatedWithoutPassword.parse(updateUser)
  return user
}

export { updateUserService }

