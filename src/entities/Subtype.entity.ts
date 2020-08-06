import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Product } from "./Product.entity";

@Entity("subtype")
export class Subtype {
  @PrimaryGeneratedColumn()
  subtypeId: number;

  @Column()
  subtypeName: string;

  @OneToMany(() => Product, (product) => product.subtype)
  products: Product[];
}
