import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684857592448 implements MigrationInterface {
    name = 'InitialMigration1684857592448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "date_register" character varying NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "date_register" date NOT NULL DEFAULT now()`);
    }

}
