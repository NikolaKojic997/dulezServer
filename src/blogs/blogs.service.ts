import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/User.entity";
import {Repository} from "typeorm";
import {Blog} from "../entities/Blog.entity";

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(Blog)
        private blogsRepository: Repository<Blog>,
    ) {}

    async findAll(): Promise<Blog[]> {
        return this.blogsRepository.find();
    }

    async findOne(id: number): Promise<Blog> {
        const u = await this.blogsRepository.findOne(id);
        if (!u){
            throw new HttpException(
                "Blog with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(blog: Blog): Promise<boolean> {
        try {
            const u = await this.blogsRepository.save(blog);
        }
        catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.BAD_REQUEST
            );
        }
        return true;
    }

    async remove(id: number) : Promise<boolean> {
        const film = await this.blogsRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Blog with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(blog: Blog, id: any) : Promise<boolean>{
        try {
            const result = await this.blogsRepository.update(id, blog);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'blog with given id not found',
                    HttpStatus.NOT_FOUND
                );
            }
            return true;
        }
        catch (error)
        {
            throw new HttpException(
                error.message,
                HttpStatus.BAD_REQUEST
            );
        }
    }
}
