import { Request, Response } from 'express'
import { createdLoginService } from '../../service/login/login.user.Service'

const loginController = async(req:Request, resp:Response) =>{
  const token = await createdLoginService(req.body)
  return resp.json({
    token: token,
  })
}

export { loginController }

