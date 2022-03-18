import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647515167400 implements MigrationInterface {
    name = 'UserTables1647515167400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD CONSTRAINT "FK_398381767d4d1c26214de3b4d5d" FOREIGN KEY ("userId") REFERENCES "t_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP CONSTRAINT "FK_398381767d4d1c26214de3b4d5d"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "userIdId" character varying NOT NULL`);
    }

}
