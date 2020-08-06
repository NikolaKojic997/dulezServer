import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../entities/User.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        const u = await this.usersRepository.findOne(id);
        if (!u){
            throw new HttpException(
                "User with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(user: User): Promise<boolean> {
        try {
            const u = await this.usersRepository.save(user);
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
        const film = await this.usersRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "User with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(user: User, id: any) : Promise<boolean>{
        try {
            const result = await this.usersRepository.update(id, user);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'User with given id not found',
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
