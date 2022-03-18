import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from "typeorm";
import {UserAuthEntity} from "./user-auth.entity";
import {DatetimesColumn} from "./columns/datetimes.column";

@Entity("t_users")
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @Index({unique:true})
    email: string;

    @Column()
    password: string;

    @Column(()=>DatetimesColumn)
    readonly time: DatetimesColumn

    @OneToMany(()=>UserAuthEntity, uAuth => uAuth.user)
    readonly auth: UserAuthEntity[]

}