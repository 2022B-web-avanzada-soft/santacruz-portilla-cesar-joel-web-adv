import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('epn_nota')
export class NotaEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nota: number;

    @ManyToOne(
        () => UserEntity, // Entidad Papa
        (instanciaUsuarioEntity) => // Campo Relacionado
            instanciaUsuarioEntity.notas,
        {
             nullable: false
        })
    usuario: UserEntity
}
