"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedContactUser = exports.returnUsersUpdateContact = exports.returnCreatedContactUser = exports.createUserContactSchema = void 0;
const zod_1 = require("zod");
const createUserContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(125),
    email: zod_1.z.string().email(),
    phone: zod_1.z.number(),
    date_register: zod_1.z.string().optional().default(() => new Date().toISOString()),
});
exports.createUserContactSchema = createUserContactSchema;
const returnCreatedContactUser = createUserContactSchema.extend({
    id: zod_1.z.number()
});
exports.returnCreatedContactUser = returnCreatedContactUser;
const updatedContactUser = zod_1.z.object({
    name: zod_1.z.string().min(2).max(125),
    email: zod_1.z.string().email(),
    phone: zod_1.z.number(),
    userId: zod_1.z.number().optional()
}).partial();
exports.updatedContactUser = updatedContactUser;
const returnUsersUpdateContact = returnCreatedContactUser.partial();
exports.returnUsersUpdateContact = returnUsersUpdateContact;
