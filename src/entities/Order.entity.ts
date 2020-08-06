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

// @Index("orderId", ["orderId"], {})
// @Index("userId", ["userId"], {})
@Entity("order")
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column("date", )
  orderDate: string;

  @Column("double")
  orderAmount: number;

  @ManyToOne(() => User, (user) => user.orders )
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.order)
  orderitems: Orderitem[];
}
