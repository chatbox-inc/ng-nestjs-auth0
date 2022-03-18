import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {UserEntity} from "./user.entity";
import {DatetimesColumn} from "./columns/datetimes.column";

@Entity("t_users_auth")
export class UserAuthEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @ManyToOne(() => UserEntity, user => user.auth)
    user: UserEntity;

    @Column()
    token: string;

    @Column(()=>DatetimesColumn)
    readonly time: DatetimesColumn
}