import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OrderitemsController} from "./orderitems.controller";
import {OrderitemsService} from "./orderitems.service";
import {Orderitem} from "../entities/Orderitem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Orderitem])],
    controllers: [OrderitemsController],
    providers: [OrderitemsService],
    exports: [OrderitemsService]
})
export class OrdersitemsModule{}
