import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684855902424 implements MigrationInterface {
    name = 'InitialMigration1684855902424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(155) NOT NULL, "password" character varying(125) NOT NULL, "phone" numeric NOT NULL, "date_register" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ContactUsers" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(155) NOT NULL, "phone" numeric NOT NULL, "date_register" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_cdf6ec21df979a78df638f1380a" UNIQUE ("email"), CONSTRAINT "PK_c398d4e8e2baf4426f8b6b6f9fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2"`);
        await queryRunner.query(`DROP TABLE "ContactUsers"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
