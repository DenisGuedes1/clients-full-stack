import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./entities";

@Entity("ContactUsers")
class ContactUsers{
@PrimaryGeneratedColumn({type: "integer"})
id : number;

@Column({length: 100})
name: string;

@Column({length:155, unique: true})
email: string;

@Column({type:"numeric"})
phone: number

@CreateDateColumn({type: "date", default: () => "CURRENT_TIMESTAMP"})
date_register: Date;



@ManyToOne(()=> Users, {onDelete: "CASCADE"})
user:Users

}

export { ContactUsers };

