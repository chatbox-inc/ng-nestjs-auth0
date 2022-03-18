import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647523013181 implements MigrationInterface {
    name = 'UserTables1647523013181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "id_token"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "oauth0_sub"`);
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "token" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "timeCreated_at" TIMESTAMP(0) NOT NULL DEFAULT '"2022-03-17T13:16:53.884Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "timeUpdated_at" TIMESTAMP(0) NOT NULL DEFAULT '"2022-03-17T13:16:53.884Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "timeCreated_at" TIMESTAMP(0) NOT NULL DEFAULT '"2022-03-17T13:16:53.884Z"'`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "timeUpdated_at" TIMESTAMP(0) NOT NULL DEFAULT '"2022-03-17T13:16:53.884Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "timeUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "timeCreated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "timeUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "timeCreated_at"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "updated_at" TIMESTAMP(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "created_at" TIMESTAMP(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users" ADD "oauth0_sub" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "updated_at" TIMESTAMP(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "created_at" TIMESTAMP(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "id_token" character varying NOT NULL`);
    }

}
