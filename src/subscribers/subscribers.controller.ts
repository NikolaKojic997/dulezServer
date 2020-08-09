import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {SubscribersService} from "./subscribers.service";
import {Subscriber} from "../entities/Subscriber.entity";

@Controller('subscribers')
@UsePipes(new ValidationPipe())
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService){
    }
    @Get('/sendEmails')
    EmailSend(): Promise<string>{
        return this.subscribersService.EmailSend();

    }

    @Get()
    findAll():Promise<Subscriber[]>{
        return this.subscribersService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Subscriber>{

        return this.subscribersService.findOne(param.id);

    }

    @Post()
    create(@Body() subscriber: Subscriber):  Promise<boolean>{
        return this.subscribersService.create(subscriber);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.subscribersService.remove(param.id);
    }

    @Put(':id')
    update(@Body() subscriber: Subscriber, @Param() param ):Promise<boolean>{
        return this.subscribersService.update(subscriber,param.id);
    }
}
