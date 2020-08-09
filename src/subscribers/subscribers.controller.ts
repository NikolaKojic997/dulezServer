import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {SubscribersService} from "./subscribers.service";
import {Subscriber} from "../entities/Subscriber.entity";
const nodemailer = require('nodemailer')

@Controller('subscribers')
@UsePipes(new ValidationPipe())
export class SubscribersController {
    constructor(private readonly subscribersService: SubscribersService){
    }
    @Get('/sendEmails')
    EmailSend(): string{
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'planart.test@gmail.com',
                pass: 'Lozinka12.'
            }
        })

        let mailOptions = {
            from: 'planart.test@gmail.com',
            to: 'volimdahodam@gmail.com',
            subject: 'Sending mails testing',
            text: "It works??"
        }

        transporter.sendMail(mailOptions, function(err,data){
            if(err){
                return "Error"
            }
            else {
                return "email sent"
            }
        })
        return "asd"
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
