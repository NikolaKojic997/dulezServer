import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Product } from "./Product.entity";

@Entity("type")
export class Type {
  @PrimaryGeneratedColumn()
  typeId: number;

  @Column()
  typeName: string | null;

  @OneToMany(() => Product, (product) => product.type)
  products: Product[];
}
