import { z } from 'zod';
import { partialUpdateUsers, returnGetUserInfOffPass, returnUsersCreatedWithoutPassword } from '../schema/schemaCreated.users';

type TreturnUsers = z.infer<typeof returnUsersCreatedWithoutPassword >
type TOffPassword = z.infer<typeof returnUsersCreatedWithoutPassword >
type TupdateUser = z.infer<typeof partialUpdateUsers>
type TgetUsersOffpass = z.infer<typeof returnGetUserInfOffPass>
export { TOffPassword, TgetUsersOffpass, TreturnUsers, TupdateUser };

