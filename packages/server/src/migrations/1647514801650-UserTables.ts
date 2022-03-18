import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647514801650 implements MigrationInterface {
    name = 'UserTables1647514801650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1b1275aba2e3044ce094936619" ON "t_users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_1b1275aba2e3044ce094936619"`);
    }

}
