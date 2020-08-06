import {Controller, Get} from '@nestjs/common';
import {SubtypeService} from "./subtype.service";
import {Subtype} from "../entities/Subtype.entity";

@Controller('subtypes')
export class SubtypeController {
    constructor(private readonly subtypesService: SubtypeService){

    }

    @Get()
    findAll():Promise<Subtype[]>{
        return this.subtypesService.findAll();
    }

}
