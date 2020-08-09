import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail, IsString} from "class-validator"

@Entity("subscriber")
export class Subscriber {
    @PrimaryGeneratedColumn()
    subscriberid: number;

    @Column()
    @IsString()
    nameAndSurname: string;

    @Column({unique: true})
    @IsString()
    @IsEmail()
    email: string ;


}
