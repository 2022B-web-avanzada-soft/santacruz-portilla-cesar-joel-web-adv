import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {UserEntity} from "./user.entity";
import {UserCreateDto} from "./dto/user-create.dto";
import {UserUpdateDto} from "./dto/user-update.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {
    }

    public userRepository = this.datasource.getRepository(UserEntity);

    find(options: FindManyOptions<UserEntity>) {
        return this.userRepository.find(options);
    }

    findOneById(id: number) {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(createData: UserCreateDto) {
        return this.userRepository.save(createData);
    }

    update(updateData: UserUpdateDto, id:number) {
        return this.userRepository.save({
            ...updateData, id
        });
    }

    delete(id: number) {
        return this.userRepository.delete(id);
    }
}
