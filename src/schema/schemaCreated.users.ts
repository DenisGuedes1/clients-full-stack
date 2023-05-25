import { hashSync } from 'bcryptjs'
import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(2).max(125),
  email: z.string().email(),
  password: z.string().transform((pass)=>{
    return hashSync(pass,10)
  }),
  phone: z.number(),
  date_register: z.string().optional().default(() => new Date().toISOString()),

})

const returnCreatedUsers = createUserSchema.extend({
  id: z.number()
})

const updatedUser = z.object({
  name: z.string().min(3).max(45).optional(),
  email: z.string().email().optional(),
  password: z.string().transform((pass) => {
    return hashSync(pass, 10);
  }).optional(),
  phone:z.number().optional(),
})

const userSchemaInfoGet = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.number(),
  date_register: z.date(),
  contacts: z.array(z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    date_register: z.date()
  })), 
});
const returnIdInfoUserSchema = userSchemaInfoGet.extend({
  id: z.number()
})


const returnUsersUpdate = returnCreatedUsers.partial().omit({password: true})
const partialUpdateUsers = updatedUser.omit({password: true})
const returnUsersCreatedWithoutPassword = returnCreatedUsers.omit({password: true})
const returnGetUserInfOffPass = returnIdInfoUserSchema.omit({password: true})

export { partialUpdateUsers, returnGetUserInfOffPass, returnUsersCreatedWithoutPassword, returnUsersUpdate }

