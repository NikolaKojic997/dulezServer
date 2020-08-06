import { Injectable } from '@nestjs/common';
import {Type} from "../entities/Type.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class TypesService {

    constructor(
        @InjectRepository(Type)
        private typesRepository: Repository<Type>,
    ) {}

    async findAll(): Promise<Type[]> {
        return this.typesRepository.find();
    }
}
