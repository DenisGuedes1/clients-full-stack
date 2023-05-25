"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1684855902424 = void 0;
class InitialMigration1684855902424 {
    constructor() {
        this.name = 'InitialMigration1684855902424';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(155) NOT NULL, "password" character varying(125) NOT NULL, "phone" numeric NOT NULL, "date_register" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "ContactUsers" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(155) NOT NULL, "phone" numeric NOT NULL, "date_register" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_cdf6ec21df979a78df638f1380a" UNIQUE ("email"), CONSTRAINT "PK_c398d4e8e2baf4426f8b6b6f9fe" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2"`);
            yield queryRunner.query(`DROP TABLE "ContactUsers"`);
            yield queryRunner.query(`DROP TABLE "Users"`);
        });
    }
}
exports.InitialMigration1684855902424 = InitialMigration1684855902424;
