import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {Order} from "../entities/Order.entity";

@Controller('orders')
@UsePipes(new ValidationPipe())
export class OrdersController {
    constructor(private readonly ordersService: OrdersService){

    }

    @Get()
    findAll():Promise<Order[]>{
        return this.ordersService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Order>{

        return this.ordersService.findOne(param.id);

    }

    @Post()
    create(@Body() order: Order):  Promise<boolean>{
        return this.ordersService.create(order);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.ordersService.remove(param.id);
    }

    @Put(':id')
    update(@Body() order: Order, @Param() param ):Promise<boolean>{
        return this.ordersService.update(order,param.id);
    }

}
