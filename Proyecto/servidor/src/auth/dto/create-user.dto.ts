
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    email: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    name: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    lastname: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    rut: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    phone: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    password: string;
}

