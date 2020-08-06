import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "../entities/User.entity";

@Controller('users')
@UsePipes(new ValidationPipe())
export class UsersController {
    constructor(private readonly usersService: UsersService){

    }

    @Get()
    findAll():Promise<User[]>{
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<User>{

        return this.usersService.findOne(param.id);

    }

    @Post()
    create(@Body() user: User):  Promise<boolean>{
        return this.usersService.create(user);
    }

    @Delete(':id')
    remove(@Param() param): Promise<boolean>{
        return this.usersService.remove(param.id);
    }

    @Put(':id')
    update(@Body() user: User, @Param() param ):Promise<boolean>{
        return this.usersService.update(user,param.id);
    }

}
