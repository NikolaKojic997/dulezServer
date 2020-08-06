import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubtypeController} from "./subtype.controller";
import {SubtypeService} from "./subtype.service";
import {Subtype} from "../entities/Subtype.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Subtype])],
    controllers: [SubtypeController],
    providers: [SubtypeService],
    exports: [SubtypeService]
})
export class SubTypesModule {}