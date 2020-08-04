import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orderitem } from "./Orderitem";
import { Type } from "./Type";
import { Subtype } from "./Subtype";
import {IsNumber, IsPositive, IsString} from "class-validator";

@Index("project_ibfk_1", ["typeId"], {})
@Index("project_ibfk_2", ["subtypeId"], {})
@Entity("project", { schema: "dulez" })
export class Project {
  @PrimaryGeneratedColumn({ type: "int", name: "projectid" })
  projectid: number;

  @Column("varchar", { name: "productName", nullable: true, length: 255 })
  @IsString()
  productName: string;

  @Column("varchar", { name: "picture", nullable: true, length: 255 })
  @IsString()
  picture: string;

  @Column("double", { name: "price", nullable: true, precision: 22 })
  @IsNumber()
  @IsPositive()
  price: number;

  @Column("int", { name: "typeId" })
  @IsNumber()
  typeId: number;

  @Column("int", { name: "subtypeId" })
  @IsNumber()
  subtypeId: number;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.product)
  orderitems: Orderitem[];

  @ManyToOne(() => Type, (type) => type.projects, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "typeId", referencedColumnName: "typeId" }])
  type: Type;

  @ManyToOne(() => Subtype, (subtype) => subtype.projects, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "subtypeId", referencedColumnName: "subtypeId" }])
  subtype: Subtype;
}
