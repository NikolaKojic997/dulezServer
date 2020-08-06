import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Orderitem} from "../entities/Orderitem.entity";

@Injectable()
export class OrderitemsService {

    constructor(
        @InjectRepository(Orderitem)
        private orderItemsRepository: Repository<Orderitem>,
    ) {}

    async findAll(): Promise<Orderitem[]> {
        return this.orderItemsRepository.find({ relations: ["product", "order"]});
    }

    async findOne(id: number): Promise<Orderitem> {
        const u = await this.orderItemsRepository.findOne({ relations: ["product", "order"], where: {orderId:2, itemId: id }});
        if (!u){
            throw new HttpException(
                "Order item with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(orderItem: Orderitem): Promise<boolean> {
        try {
            const u = await this.orderItemsRepository.save(orderItem);
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
        const film = await this.orderItemsRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Order item with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(orderItem: Orderitem, id: any) : Promise<boolean>{
        try {
            const result = await this.orderItemsRepository.update(id, orderItem);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'Order item with given id not found',
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
