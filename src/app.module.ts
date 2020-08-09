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
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import {OrdersModule} from "./orders/orders.module";
import { OrderitemsController } from './orderitems/orderitems.controller';
import { OrderitemsService } from './orderitems/orderitems.service';
import {OrdersitemsModule} from "./orderitems/orderitems.module";
import { SubscribersController } from './subscribers/subscribers.controller';
import { SubscribersService } from './subscribers/subscribers.service';
import {SubscribersModule} from "./subscribers/subscribers.module";

@Module({
  imports: [TypeOrmModule.forRoot(),
            TypesModule,
            SubTypesModule,
            UsersModule,
            ProductsModule,
            OrdersModule,
            OrdersitemsModule,
            SubscribersModule],

})
export class AppModule {
  constructor(private connection: Connection) {}
}

