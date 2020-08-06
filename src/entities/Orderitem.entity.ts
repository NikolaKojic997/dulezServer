import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order.entity";
import { Product } from "./Product.entity";

// @Index("orderId", ["orderId"], {})
// @Index("productID", ["productId"], {})
@Entity("orderitem")
export class Orderitem {
  @Column("int", { primary: true, name: "itemId" })
  itemId: number;

  @Column("int", { primary: true, name: "orderId" })
  orderId: number;

  @Column()
  quantity: number | null;


  @ManyToOne(() => Order, (order) => order.orderitems)
  @JoinColumn({ name: "orderId"})
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderitems)
  @JoinColumn({ name: "productID" })
  product: Product;
}
