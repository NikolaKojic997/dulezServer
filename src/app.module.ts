import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {TypesModule} from "./types/types.module";

@Module({
  imports: [TypeOrmModule.forRoot(), TypesModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

