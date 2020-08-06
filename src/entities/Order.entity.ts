import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";
import { Orderitem } from "./Orderitem.entity";
import {IsNumber, IsString} from "class-validator"

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column("date")
  @IsString()
  orderDate: string;

  @Column("double")
  @IsNumber()
  orderAmount: number;

  @ManyToOne(() => User, (user) => user.orders )
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.order)
  orderitems: Orderitem[];
}
