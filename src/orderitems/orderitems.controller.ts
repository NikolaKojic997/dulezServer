import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {OrderitemsService} from "./orderitems.service";
import {Orderitem} from "../entities/Orderitem.entity";

@Controller('orderitems')
@UsePipes(new ValidationPipe())
export class OrderitemsController {


    constructor(private readonly orderitemsService: OrderitemsService){

    }

    @Get()
    findAll():Promise<Orderitem[]>{
        return this.orderitemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Orderitem>{

        return this.orderitemsService.findOne(param.id);

    }

    @Post()
    create(@Body() orderItem: Orderitem):  Promise<boolean>{
        return this.orderitemsService.create(orderItem);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.orderitemsService.remove(param.id);
    }

    @Put(':id')
    update(@Body() orderItem: Orderitem, @Param() param ):Promise<boolean>{
        return this.orderitemsService.update(orderItem,param.id);
    }
}
