import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTables1647578725497 implements MigrationInterface {
    name = 'UserTables1647578725497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "t_session" ("expiredAt" bigint NOT NULL, "id" character varying(255) NOT NULL, "json" text NOT NULL, CONSTRAINT "PK_c4fd490fea9af4833a5e7c6b7a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_570c97a7e1113071c6ee98ac4e" ON "t_session" ("expiredAt") `);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-18 04:43:30.043'`);
        await queryRunner.query(`ALTER TABLE "t_users" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-18 04:43:30.042'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeUpdated_at" SET DEFAULT '2022-03-18 04:43:30.043'`);
        await queryRunner.query(`ALTER TABLE "t_users_auth" ALTER COLUMN "timeCreated_at" SET DEFAULT '2022-03-18 04:43:30.042'`);
        await queryRunner.query(`DROP INDEX "public"."IDX_570c97a7e1113071c6ee98ac4e"`);
        await queryRunner.query(`DROP TABLE "t_session"`);
    }

}
