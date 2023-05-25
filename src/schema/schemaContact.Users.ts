import { z } from "zod"

const createUserContactSchema = z.object({
  name: z.string().min(2).max(125),
  email: z.string().email(),
  phone: z.number(),
  date_register: z.string().optional().default(() => new Date().toISOString()),
 
})

const returnCreatedContactUser = createUserContactSchema.extend({
  id:z.number()
})
const updatedContactUser = z.object({
  name: z.string().min(2).max(125),
  email: z.string().email(),
  phone: z.number(),
  userId: z.number().optional()
}).partial()
const returnUsersUpdateContact = returnCreatedContactUser.partial()
export { createUserContactSchema, returnCreatedContactUser, returnUsersUpdateContact, updatedContactUser }

