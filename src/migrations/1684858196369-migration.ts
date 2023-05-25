import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1684858196369 implements MigrationInterface {
    name = 'Migration1684858196369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "date_register" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "date_register" character varying NOT NULL DEFAULT now()`);
    }

}
