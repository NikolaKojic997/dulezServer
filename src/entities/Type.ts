import { Column, Entity, OneToMany } from "typeorm";
import { Project } from "./Project";
import {IsString} from "class-validator";

@Entity("type", { schema: "dulez" })
export class Type {
  @Column("int", { primary: true, name: "typeId" })
  typeId: number;

  @Column("varchar", { name: "typeName", nullable: true, length: 255 })
  @IsString()
  typeName: string;

  @OneToMany(() => Project, (project) => project.type)
  projects: Project[];
}
