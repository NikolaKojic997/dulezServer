import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsDate, IsString} from "class-validator";
import {Comment} from "./Comment.entity";


@Entity()
export class Blog {

    @PrimaryGeneratedColumn()
    blogId: number;
    @IsDate()
    date: Date;
    @IsString()
    title: string;
    @Column("text")
    @IsString()
    text: string;

    @OneToMany(() => Comment , (comment) => comment.blog )
    comments: Comment[];

}