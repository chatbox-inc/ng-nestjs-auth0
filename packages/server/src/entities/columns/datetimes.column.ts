import {Column} from "typeorm";

const options = {
    type: 'timestamp',
    // default: () => new Date(),
    precision: 0
}

export class DatetimesColumn{
    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: ()=>"now()",
        precision: 0,
    })
    readonly createdAt: Date;

    @Column({
        name: 'updated_at',
        type: 'timestamp',
        default: ()=>"now()",
        precision: 0,
    })
    readonly updatedAt: Date;
}