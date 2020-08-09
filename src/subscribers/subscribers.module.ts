import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubscribersController} from "./subscribers.controller";
import {SubscribersService} from "./subscribers.service";
import {Subscriber} from "../entities/Subscriber.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Subscriber])],
    controllers: [SubscribersController],
    providers: [SubscribersService],
    exports: [SubscribersService]
})
export class SubscribersModule{}