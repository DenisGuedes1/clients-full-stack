"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnUsersUpdate = exports.returnUsersCreatedWithoutPassword = exports.returnGetUserInfOffPass = exports.partialUpdateUsers = exports.createUserSchema = void 0;
const bcryptjs_1 = require("bcryptjs");
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(125),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().transform((pass) => {
        return (0, bcryptjs_1.hashSync)(pass, 10);
    }),
    phone: zod_1.z.number(),
    date_register: zod_1.z.string().optional().default(() => new Date().toISOString()),
});
const returnCreatedUsers = exports.createUserSchema.extend({
    id: zod_1.z.number()
});
const updatedUser = zod_1.z.object({
    name: zod_1.z.string().min(3).max(45).optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().transform((pass) => {
        return (0, bcryptjs_1.hashSync)(pass, 10);
    }).optional(),
    phone: zod_1.z.number().optional(),
});
const userSchemaInfoGet = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.number(),
    date_register: zod_1.z.date(),
    contacts: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        date_register: zod_1.z.date()
    })),
});
const returnIdInfoUserSchema = userSchemaInfoGet.extend({
    id: zod_1.z.number()
});
const returnUsersUpdate = returnCreatedUsers.partial().omit({ password: true });
exports.returnUsersUpdate = returnUsersUpdate;
const partialUpdateUsers = updatedUser.omit({ password: true });
exports.partialUpdateUsers = partialUpdateUsers;
const returnUsersCreatedWithoutPassword = returnCreatedUsers.omit({ password: true });
exports.returnUsersCreatedWithoutPassword = returnUsersCreatedWithoutPassword;
const returnGetUserInfOffPass = returnIdInfoUserSchema.omit({ password: true });
exports.returnGetUserInfOffPass = returnGetUserInfOffPass;
