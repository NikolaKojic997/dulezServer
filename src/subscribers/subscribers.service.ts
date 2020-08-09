import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Subscriber} from "../entities/Subscriber.entity";

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscriber)
        private subscribersRepository: Repository<Subscriber>,
    ) {}

    async findAll(): Promise<Subscriber[]> {
        return this.subscribersRepository.find();
    }

    async findOne(id: number): Promise<Subscriber> {
        const u = await this.subscribersRepository.findOne(id);
        if (!u){
            throw new HttpException(
                "Subscriber with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(subscriber: Subscriber): Promise<boolean> {
        try {
            const u = await this.subscribersRepository.save(subscriber);
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
        const film = await this.subscribersRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Subscriber with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(subscriber: Subscriber, id: any) : Promise<boolean>{
        try {
            const result = await this.subscribersRepository.update(id, subscriber);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'Subscriber with given id not found',
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
    }}
