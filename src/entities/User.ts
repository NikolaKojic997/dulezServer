import { Column, Entity, OneToMany } from "typeorm";
import { Order } from "./Order";
import {IsEmail, IsString} from "class-validator";

@Entity("user", { schema: "dulez" })
export class User {
  @Column("int", { primary: true, name: "userid" })
  userid: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  @IsString()
  name: string;

  @Column("varchar", { name: "surname", nullable: true, length: 255 })
  @IsString()
  surname: string;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  @IsString()
  @IsEmail()
  email: string;

  @Column("varchar", { name: "postNumber", nullable: true, length: 255 })
  @IsString()
  postNumber: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  @IsString()
  address: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
