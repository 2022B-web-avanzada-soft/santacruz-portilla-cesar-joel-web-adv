import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class UserCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsIn(['U', 'A'])
    userRole: string;
}