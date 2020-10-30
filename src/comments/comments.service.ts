import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Blog} from "../entities/Blog.entity";
import {Repository} from "typeorm";
import {Comment} from "../entities/Comment.entity";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
    ) {}

    async findAll(): Promise<Comment[]> {
        return this.commentsRepository.find();
    }

    async findOne(id: number): Promise<Comment> {
        const u = await this.commentsRepository.findOne(id);
        if (!u){
            throw new HttpException(
                "Comment with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(comment: Comment): Promise<boolean> {
        try {
            const u = await this.commentsRepository.save(comment);
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
        const film = await this.commentsRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Comment with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(comment: Comment, id: any) : Promise<boolean>{
        try {
            const result = await this.commentsRepository.update(id, comment);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'Comment with given id not found',
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
