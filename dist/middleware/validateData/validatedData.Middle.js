"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDataMiddleware = void 0;
const validateDataMiddleware = (schema) => (req, resp, next) => {
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    return next();
};
exports.validateDataMiddleware = validateDataMiddleware;
