import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {TypesModule} from "./types/types.module";
import {SubTypesModule} from "./subtypes/subtype.module";
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {UsersModule} from "./users/users.module";
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import {ProductsModule} from "./products/products.module";

@Module({
  imports: [TypeOrmModule.forRoot(), TypesModule, SubTypesModule, UsersModule, ProductsModule]

})
export class AppModule {
  constructor(private connection: Connection) {}
}

