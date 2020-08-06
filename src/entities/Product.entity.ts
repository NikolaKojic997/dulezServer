import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orderitem } from "./Orderitem.entity";
import { Type } from "./Type.entity";
import { Subtype } from "./Subtype.entity";

// @Index("typeId", ["typeId"], {})
// @Index("subtypeId", ["subtypeId"], {})
@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  productName: string ;

  @Column()
  picture: string ;

  @Column()
  price: number ;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.product)
  orderitems: Orderitem[];

  @ManyToOne(() => Type, (type) => type.products, {})
  @JoinColumn({ name: "typeId"})
  type: Type;

  @ManyToOne(() => Subtype, (subtype) => subtype.products)
  @JoinColumn({ name: "subtypeId" })
  subtype: Subtype;
}
