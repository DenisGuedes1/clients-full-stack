"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdLoginSchema = void 0;
const zod_1 = require("zod");
const createdLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(10).max(45),
    password: zod_1.z.string().max(120),
});
exports.createdLoginSchema = createdLoginSchema;
