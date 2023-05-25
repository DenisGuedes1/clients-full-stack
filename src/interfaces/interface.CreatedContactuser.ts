import { z } from 'zod'
import { returnCreatedContactUser, returnUsersUpdateContact } from '../schema/schemaContact.Users'

type TreturnUsersContact = z.infer<typeof returnCreatedContactUser >
type TupdateContact = z.infer<typeof returnUsersUpdateContact >

export { TreturnUsersContact, TupdateContact }

