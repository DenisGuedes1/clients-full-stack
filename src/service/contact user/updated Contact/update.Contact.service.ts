import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { Users } from "../../../entities/entities";
import { ContactUsers } from "../../../entities/entities.contact";
import { AppError } from "../../../errors/error";
import { TupdateContact } from "../../../interfaces/interface.CreatedContactuser";
import { returnUsersUpdateContact } from "../../../schema/schemaContact.Users";

const updateContactUser = async (
  contactId: number,
  contactData: ContactUsers,
  userId: number
): Promise<TupdateContact> => {
  const contactRepository: Repository<ContactUsers> = AppDataSource.getRepository(ContactUsers);
 
  const contact = await contactRepository.findOne({where:{id:contactId}});

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

const cont = await contactRepository
  .createQueryBuilder("contact")
  .leftJoinAndSelect("contact.user", "user")
  .where("contact.id = :contactId", { contactId })
  .andWhere("user.id = :userId", { userId })
  .getOne();
if (!cont) {
  throw new AppError('Contact not found', 404);
}
 

  const updatedContact = contactRepository.merge(contact, contactData)
  if (updatedContact.phone && typeof updatedContact.phone === 'string') {
    const parsedPhone = parseInt(updatedContact.phone);
    if (!isNaN(parsedPhone)) {
      updatedContact.phone = parsedPhone;
    } else {
      throw new AppError('Invalid phone number', 400);
    }
  }
  const savedContact = await contactRepository.save(updatedContact);

  const updatedContactResponse: TupdateContact = returnUsersUpdateContact.parse(savedContact);

  return updatedContactResponse
};

export { updateContactUser };

