import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/entities";
import { TOffPassword } from "../../interfaces/interfaces.CreatedUser";
import { returnUsersCreatedWithoutPassword } from '../../schema/schemaCreated.users';

const createdUserService = async(userData: Users): Promise<TOffPassword> => {
    const userRepository:Repository<Users> = AppDataSource.getRepository(Users)
    const user:Users = userRepository.create(userData)
    await userRepository.save(user)

    const newUser = returnUsersCreatedWithoutPassword.parse(user)

    return newUser

  }
export { createdUserService };
