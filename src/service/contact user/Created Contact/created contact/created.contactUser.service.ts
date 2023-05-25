import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Users } from "../../../../entities/entities";
import { ContactUsers } from "../../../../entities/entities.contact";
import { AppError } from "../../../../errors/error";
import { TreturnUsersContact } from "../../../../interfaces/interface.CreatedContactuser";
import { returnCreatedContactUser } from "../../../../schema/schemaContact.Users";

const createdContactUser = async(contactData: ContactUsers, userId:number): Promise<TreturnUsersContact > =>{

  const contactRepository: Repository<ContactUsers> = AppDataSource.getRepository(ContactUsers)
 const contact:ContactUsers = contactRepository.create(contactData)
 
 
 const existingEmail = await contactRepository.findOne({where:{email:contactData.email}});
  if (existingEmail) {
    throw new AppError("Email already exists", 409);
  }
   
 const existingPhone = await contactRepository.findOne({where:{phone:contactData.phone}});
 if (existingPhone) {
   throw new AppError("Phone already exists", 409);
 }


 const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({where:{id: userId}});
  
  if (!user) {
    throw new AppError("User not found", 404);
  }
 contact.user = user
 await contactRepository.save(contact)

 const newContact = returnCreatedContactUser.parse(contact)

 const contactWithUserId ={
  ...newContact,
  userId: user.id
 }

 return contactWithUserId

}

export { createdContactUser };

