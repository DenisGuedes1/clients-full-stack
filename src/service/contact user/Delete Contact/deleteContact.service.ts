import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { ContactUsers } from "../../../entities/entities.contact";
import { AppError } from "../../../errors/error";


const deleteContactUserService = async (contactId: number, userId: number) => {
  const contactRepository: Repository<ContactUsers> = AppDataSource.getRepository(ContactUsers);

  const contact = await contactRepository.findOne({ where: { id: contactId } });

  if (!contact) {
    throw new AppError("Contact not found", 404);
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


  await contactRepository.delete(contactId);

  return { message: "Contact deleted successfully" };
};

export { deleteContactUserService };

