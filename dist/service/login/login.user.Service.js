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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdLoginService = void 0;
const bcryptjs_1 = require("bcryptjs");
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities/entities");
const error_1 = require("../../errors/error");
const createdLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.Users);
    const user = yield userRepository.findOneBy({
        email: loginData.email
    });
    if (!user) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(loginData.password, user.password);
    if (!passwordMatch) {
        throw new error_1.AppError("Invalid credentials", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
    }, process.env.SECRET_kEY, {
        expiresIn: process.env.EXPIRES_IN,
        subject: String(user.id),
    });
    return token;
});
exports.createdLoginService = createdLoginService;
