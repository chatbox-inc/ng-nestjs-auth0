import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647506895482 implements MigrationInterface {
    name = 'UserTables1647506895482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "t_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "oauth0_sub" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP(0) NOT NULL, "updated_at" TIMESTAMP(0) NOT NULL, CONSTRAINT "PK_45e27b946b7f8cd527fd4fbe658" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "t_users_auth" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "id_token" character varying NOT NULL, "created_at" TIMESTAMP(0) NOT NULL, "updated_at" TIMESTAMP(0) NOT NULL, CONSTRAINT "PK_865209e53fe4561bcabacf58deb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "t_users_auth"`);
        await queryRunner.query(`DROP TABLE "t_users"`);
    }

}
