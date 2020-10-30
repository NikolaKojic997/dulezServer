import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Blog} from "../entities/Blog.entity";
import {BlogsController} from "./blogs.controller";
import {BlogsService} from "./blogs.service";


@Module({
    imports: [TypeOrmModule.forFeature([Blog])],
    controllers: [BlogsController],
    providers: [BlogsService],
    exports: [BlogsService]
})
export class BlogsModule{}
