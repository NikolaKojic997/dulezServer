import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Orderitem } from "./Orderitem";
import {IsDate, IsNumber, IsPositive} from "class-validator";

@Index("userId", ["userId"], {})
@Entity("order", { schema: "dulez" })
export class Order {
  @PrimaryGeneratedColumn({ type: "int", name: "orderId" })
  orderId: number;

  @Column("date", { name: "orderDate", nullable: true })
  @IsDate()
  orderDate: Date;

  @Column("double", { name: "orderAmount", nullable: true, precision: 22 })
  @IsNumber()
  @IsPositive()
  orderAmount: number;

  @Column("int", { name: "userId" })
  @IsNumber()
  userId: number;

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userid" }])
  user: User;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.order)
  orderitems: Orderitem[];
}
