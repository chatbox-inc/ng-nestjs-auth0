import {Entity, Column, Index, PrimaryColumn} from "typeorm";
import { ISession } from "connect-typeorm";

console.log("entity loaded")

@Entity("t_session")
export class Session implements ISession {
    @Index()
    @Column("bigint")
    public expiredAt = Date.now();

    @PrimaryColumn("varchar", { length: 255 })
    public id = "";

    @Column("text")
    public json = "";
}