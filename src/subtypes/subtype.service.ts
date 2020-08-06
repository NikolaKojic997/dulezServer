import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Subtype} from "../entities/Subtype.entity";

@Injectable()
export class SubtypeService {
    constructor(
        @InjectRepository(Subtype)
        private subtypesRepository: Repository<Subtype>,
    ) {}

    async findAll(): Promise<Subtype[]> {
        return this.subtypesRepository.find();
    }
}
