import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647515136821 implements MigrationInterface {
    name = 'UserTables1647515136821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" RENAME COLUMN "userId" TO "userIdId"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "userIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD CONSTRAINT "FK_fefc83a0e2469aeb1f3f4ee9520" FOREIGN KEY ("userIdId") REFERENCES "t_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP CONSTRAINT "FK_fefc83a0e2469aeb1f3f4ee9520"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ADD "userIdId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" RENAME COLUMN "userIdId" TO "userId"`);
    }

}
