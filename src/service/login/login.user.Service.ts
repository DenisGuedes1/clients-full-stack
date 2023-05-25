import { compare } from 'bcryptjs'
import "dotenv/config"
import jwt from 'jsonwebtoken'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/entities'
import { AppError } from '../../errors/error'
import { Tlogin } from '../../interfaces/interface.LoginUser'

const createdLoginService = async (loginData: Tlogin): Promise<string> =>{

  const userRepository: Repository<Users> = AppDataSource.getRepository(Users)
  const user:Users | null = await userRepository.findOneBy({
    email: loginData.email
  })

  if(!user){
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if(!passwordMatch){
    throw new AppError("Invalid credentials", 401)
  }

  const token: string = jwt.sign(
  {
    id: user.id,
  },
  process.env.SECRET_kEY!,
  {
     expiresIn: process.env.EXPIRES_IN,
     subject: String(user.id),
  }
  )
  return token;
}

export { createdLoginService }

