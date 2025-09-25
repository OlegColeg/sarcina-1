import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1758791000283 implements MigrationInterface {
    name = 'Initial1758791000283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "denumire" character varying NOT NULL, "profesor" character varying NOT NULL, "credite" integer NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "nume" character varying NOT NULL, "email" character varying NOT NULL, "varsta" integer NOT NULL, "grupa" character varying NOT NULL, CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e" UNIQUE ("email"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_students" ("course_id" integer NOT NULL, "student_id" integer NOT NULL, CONSTRAINT "PK_4a364b5ed5add8d9d3c3edf0cbb" PRIMARY KEY ("course_id", "student_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f92b04de7259dd40d646d0a457" ON "course_students" ("course_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0c333793939e89fc835e6a95db" ON "course_students" ("student_id") `);
        await queryRunner.query(`ALTER TABLE "course_students" ADD CONSTRAINT "FK_f92b04de7259dd40d646d0a4570" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "course_students" ADD CONSTRAINT "FK_0c333793939e89fc835e6a95dbd" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course_students" DROP CONSTRAINT "FK_0c333793939e89fc835e6a95dbd"`);
        await queryRunner.query(`ALTER TABLE "course_students" DROP CONSTRAINT "FK_f92b04de7259dd40d646d0a4570"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0c333793939e89fc835e6a95db"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f92b04de7259dd40d646d0a457"`);
        await queryRunner.query(`DROP TABLE "course_students"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}
