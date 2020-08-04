import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Project } from "./Project";
import { Order } from "./Order";
import {IsNumber} from "class-validator";

@Index("productID", ["productId"], {})
@Index("orderId", ["orderId"], {})
@Entity("orderitem", { schema: "dulez" })
export class Orderitem {
  @Column("int", { primary: true, name: "itemId" })
  itemId: number;

  @Column("int", { primary: true, name: "orderId" })
  orderId: number;

  @Column("int", { name: "quantity", nullable: true })
  @IsNumber()
  quantity: number | null;

  @Column("int", { name: "productID" })
  @IsNumber()
  productId: number;

  @ManyToOne(() => Project, (project) => project.orderitems, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "productID", referencedColumnName: "projectid" }])
  product: Project;

  @ManyToOne(() => Order, (order) => order.orderitems, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "orderId" }])
  order: Order;
}
