import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Order } from "./Order.entity";
import {IsEmail, IsInt, IsString} from "class-validator"

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  userid: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  surname: string ;

  @Column()
  @IsString()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  postNumber: string ;

  @Column()
  @IsString()
  address: string ;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
