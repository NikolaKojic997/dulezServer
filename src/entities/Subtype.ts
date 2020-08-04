import { Column, Entity, OneToMany } from "typeorm";
import { Project } from "./Project";
import {IsString} from "class-validator";

@Entity("subtype", { schema: "dulez" })
export class Subtype {
  @Column("int", { primary: true, name: "subtypeId" })
  subtypeId: number;

  @Column("varchar", { name: "subtypeName", nullable: true, length: 255 })
  @IsString()
  subtypeName: string;

  @OneToMany(() => Project, (project) => project.subtype)
  projects: Project[];
}
