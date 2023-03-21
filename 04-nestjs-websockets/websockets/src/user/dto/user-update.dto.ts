import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class UserUpdateDto {
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