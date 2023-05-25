import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ContactUsers } from "./entities.contact";

@Entity("Users")
class Users{
  @PrimaryGeneratedColumn({type:"integer"})
  id: number;
  
  @Column({length: 100})
  name: string;

  @Column({length:155, unique: true})
  email: string;

  @Column({length:125})
  password: string;

  @Column({type:"numeric"})
  phone: number

 @CreateDateColumn({type: "date", default: () => "CURRENT_TIMESTAMP" })
  date_register: Date;

 @OneToMany(()=> ContactUsers,( contactUser) => contactUser.user)
  contacts: ContactUsers[]

}
export { Users };

