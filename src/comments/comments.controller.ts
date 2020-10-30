import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BlogsService} from "../blogs/blogs.service";
import {Blog} from "../entities/Blog.entity";
import {CommentsService} from "./comments.service";
import {Comment} from "../entities/Comment.entity";

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService){

    }

    @Get()
    findAll():Promise<Comment[]>{
        return this.commentsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Comment>{

        return this.commentsService.findOne(param.id);

    }

    @Post()
    create(@Body() comment: Comment):  Promise<boolean>{
        return this.commentsService.create(comment);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.commentsService.remove(param.id);
    }

    @Put(':id')
    update(@Body() comment: Comment, @Param() param ):Promise<boolean>{
        return this.commentsService.update(comment,param.id);
    }
}
