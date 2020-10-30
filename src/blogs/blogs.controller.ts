import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BlogsService} from "./blogs.service";
import {Blog} from "../entities/Blog.entity";


@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService){

    }

    @Get()
    findAll():Promise<Blog[]>{
        return this.blogsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Blog>{

        return this.blogsService.findOne(param.id);

    }

    @Post()
    create(@Body() blog: Blog):  Promise<boolean>{
        return this.blogsService.create(blog);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.blogsService.remove(param.id);
    }

    @Put(':id')
    update(@Body() blog: Blog, @Param() param ):Promise<boolean>{
        return this.blogsService.update(blog,param.id);
    }
}
