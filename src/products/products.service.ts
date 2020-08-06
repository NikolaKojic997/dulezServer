import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "../entities/Product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ["type", "subtype"]});
    }

    async findOne(id: number): Promise<Product> {
        const u = await this.productRepository.findOne(id, { relations: ["type", "subtype"]});
        if (!u){
            throw new HttpException(
                "Product with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return u;
    }

    async create(product: Product): Promise<boolean> {
        try {
            const u = await this.productRepository.save(product);
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
        const film = await this.productRepository.delete(id);
        if (film.raw.affectedRows === 0){
            throw new HttpException(
                "Product with given id not found",
                HttpStatus.BAD_REQUEST
            )
        }
        return true;
    }

    async update(product: Product, id: any) : Promise<boolean>{
        try {
            const result = await this.productRepository.update(id, product);
            if (result.raw.affectedRows === 0) {
                throw new HttpException(
                    'Product with given id not found',
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
