import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsDate, IsEmail, IsString} from "class-validator";
import {Blog} from "./Blog.entity";
import {Product} from "./Product.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    commentId: number;

    @IsString()
    @IsEmail()
    @Column()
    email: string;

    @IsString()
    @Column()
    username: string;

    @Column('text')
    @IsString()
    commentText: string;

    @IsDate()
    @Column()
    date: Date;

    @ManyToOne(() => Blog, (blog) => blog.comments)
    @JoinColumn({ name: "blogId" })
    product: Product;
    blog: Blog;
}