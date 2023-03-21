import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserCreateDto} from "./dto/user-create.dto";
import {UserUpdateDto} from "./dto/user-update.dto";
import {validate} from "class-validator";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {UserEntity} from "./user.entity";

@Controller('user')
// http://localhost:3000/user
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Param() params // {id: 1}
    ) {
        return this.userService.findOneById(+params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params // {id: 1}
    ) {
        return this.userService.delete(+params.id);
    }

    @Put("/:id") // PUT /user/:id
    @HttpCode(200)
    async update(
        @Param() params,
        @Body() bodyParams
    ) {
        const newRecord = new UserUpdateDto();
        newRecord.name = bodyParams.name;
        newRecord.lastname = bodyParams.lastname;
        newRecord.userRole = bodyParams.userRole;
        const errors = await validate(
            newRecord
        )
        if (errors.length > 0) {
            console.error({errors});
            throw new BadRequestException({
                message: 'Error validando datos',
            })
        }
        return this.userService.update(bodyParams, +params.id);
    }

    @Post("/") // POST /user
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ) {
        const newRecord = new UserCreateDto();
        newRecord.name = bodyParams.name;
        newRecord.lastname = bodyParams.lastname;
        newRecord.userRole = bodyParams.userRole;
        const errors = await validate(
            newRecord
        );
        if (errors.length > 0) {
            console.error({errors});
            throw new BadRequestException({
                message: 'Error validando datos',
            })
        }
        return this.userService.create(newRecord);
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams
    ) {
        const consulta: FindManyOptions<UserEntity> = {
            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10,
        };
        const requestWhere = [] as FindOptionsWhere<UserEntity>[];
        if (queryParams.names) {
            requestWhere.push({
                name: Like('%' + queryParams.name + '%'),
                userRole: queryParams.userRole ? queryParams.userRole : undefined
            })
        }
        if (queryParams.lastname) {
            requestWhere.push({
                lastname: Like('%' + queryParams.lastname + '%'), // LIKE '%a%'
                userRole: queryParams.userRole ? queryParams.userRole : undefined // U
            })
        }
        if(requestWhere.length > 0){
            consulta.where = requestWhere;
        }
        return this.userService.find(consulta);
    }

}