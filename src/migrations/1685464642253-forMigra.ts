import { MigrationInterface, QueryRunner } from "typeorm";

export class ForMigra1685464642253 implements MigrationInterface {
    name = 'ForMigra1685464642253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2"`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2"`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
