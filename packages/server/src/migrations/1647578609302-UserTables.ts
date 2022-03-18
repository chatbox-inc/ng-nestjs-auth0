import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647578609302 implements MigrationInterface {
    name = 'UserTables1647578609302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT '"2022-03-18T04:43:30.042Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT '"2022-03-18T04:43:30.043Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT '"2022-03-18T04:43:30.042Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT '"2022-03-18T04:43:30.043Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
    }

}
