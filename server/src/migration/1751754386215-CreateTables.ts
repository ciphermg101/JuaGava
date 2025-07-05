import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1751754386215 implements MigrationInterface {
    name = 'CreateTables1751754386215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "content" text NOT NULL, "content_type" character varying NOT NULL, "difficulty_level" character varying NOT NULL, "age_group" text NOT NULL, "topics" text NOT NULL, "author_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "progress" ("id" character varying NOT NULL, "progress" double precision NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, "content_id" character varying, CONSTRAINT "PK_79abdfd87a688f9de756a162b6f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("id" character varying NOT NULL, "email" character varying NOT NULL, "first_name" character varying, "last_name" character varying, "full_name" character varying, "role" character varying NOT NULL DEFAULT 'student', "age_group" character varying, "location" character varying, "learning_preferences" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_5cf98e56d4fbf9b73c72e201733"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_ddcaca3a9db9d77105d51c02c24"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "progress"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
