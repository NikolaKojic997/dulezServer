import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Order } from "./Order.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  userid: number;

  @Column()
  name: string;

  @Column()
  surname: string ;

  @Column()
  email: string;

  @Column()
  postNumber: string ;

  @Column()
  address: string ;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
