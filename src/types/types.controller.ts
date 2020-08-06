import {Controller, Get} from '@nestjs/common';
import {TypesService} from "./types.service";
import {Type} from "../entities/Type.entity";

@Controller('types')
export class TypesController {

    constructor(private readonly typesService: TypesService){

    }

    @Get()
    findAll():Promise<Type[]>{
        return this.typesService.findAll();
    }


}
