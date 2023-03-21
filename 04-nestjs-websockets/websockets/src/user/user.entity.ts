import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NotaEntity} from "../nota/nota.entity";


@Entity('epn_user') // Table name
export class UserEntity {
    @PrimaryGeneratedColumn() // Autoincrement
    id: number;
    // Columns name, type, length, nullable
    @Column({
        name: 'name',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    name: string;
    @Column({
        name: 'lastname',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    lastname: string;
    @Column({
        name: 'user_role',
        type: 'varchar',
        length: 1,
        nullable: false,
        default: 'U',
        comment: 'U: User, A: Admin',
    })
    userRole: string;
    @OneToMany(
        () => NotaEntity, // Entidad Hija
        (instanciaNotaEntity) => // Campo Relacionado
            instanciaNotaEntity.usuario,
    )
    notas: NotaEntity[];
}
