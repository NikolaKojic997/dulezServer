import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "../entities/Product.entity";
import {Repository} from "typeorm";
import {Order} from "../entities/Order.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
    ) {}

    async findAll(): Promise<Order[]> {
        return this.ordersRepository.find({ relations: ["user", "orderitems"]});
    }

    async findOne(id: number): Promise<Order> {
        const u = await this.ordersRepository.findOne(id, { relations: ["user", "orderitems"]});
        if (!u){
            throw new HttpException(
                "Order with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(order: Order): Promise<boolean> {
        try {
            const u = await this.ordersRepository.save(order);
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
        const film = await this.ordersRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Order with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(order: Order, id: any) : Promise<boolean>{
        try {
            const result = await this.ordersRepository.update(id, order);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'Order with given id not found',
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
