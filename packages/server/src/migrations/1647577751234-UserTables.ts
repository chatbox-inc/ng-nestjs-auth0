import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647577751234 implements MigrationInterface {
    name = 'UserTables1647577751234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT '"2022-03-18T04:29:11.964Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT '"2022-03-18T04:29:11.965Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT '"2022-03-18T04:29:11.964Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT '"2022-03-18T04:29:11.965Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-17 13:16:53.884'`);
    }

}
