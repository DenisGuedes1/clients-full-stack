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
exports.InitialMigration1684857592448 = void 0;
class InitialMigration1684857592448 {
    constructor() {
        this.name = 'InitialMigration1684857592448';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
            yield queryRunner.query(`ALTER TABLE "Users" ADD "date_register" character varying NOT NULL DEFAULT now()`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "date_register"`);
            yield queryRunner.query(`ALTER TABLE "Users" ADD "date_register" date NOT NULL DEFAULT now()`);
        });
    }
}
exports.InitialMigration1684857592448 = InitialMigration1684857592448;
