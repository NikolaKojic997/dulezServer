import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {User} from "../entities/User.entity";
import {ProductsService} from "./products.service";
import {Product} from "../entities/Product.entity";

@Controller('products')
@UsePipes(new ValidationPipe())
export class ProductsController {
    constructor(private readonly productsService: ProductsService){

    }

    @Get()
    findAll():Promise<Product[]>{
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Product>{

        return this.productsService.findOne(param.id);

    }

    @Post()
    create(@Body() product: Product):  Promise<boolean>{
        return this.productsService.create(product);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.productsService.remove(param.id);
    }

    @Put(':id')
    update(@Body() product: Product, @Param() param ):Promise<boolean>{
        return this.productsService.update(product,param.id);
    }
}
