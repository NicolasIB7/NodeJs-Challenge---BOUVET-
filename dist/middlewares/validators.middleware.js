"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorLogin = exports.validatorRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validatorRegister = [
    (0, express_validator_1.body)("email", "Email format incorrect.").trim().isEmail().normalizeEmail(),
    (0, express_validator_1.body)("password", "Password must include: At least 8 characters long. At least one capital letter. At least one lowercase letter. At least one digit.")
        .trim()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
    (0, express_validator_1.body)("repassword", "password do not match").custom((value, { req }) => {
        return value === req.body.password;
    }),
    (0, express_validator_1.body)("name", "This field must exists").exists(),
    (0, express_validator_1.body)("name", "The name field cannot be empty").notEmpty(),
    (0, express_validator_1.body)("lastname", "This field must exists").exists(),
    (0, express_validator_1.body)("lastname", "The lastname field cannot be empty").notEmpty(),
    (0, express_validator_1.body)("dni", "This field must exists").exists(),
    (0, express_validator_1.body)("dni", "The dni field must have a correct length")
        .notEmpty()
        .isInt()
        .isLength({ min: 8, max: 8 }),
    (0, express_validator_1.body)("date", "This field must exists").exists(),
    (0, express_validator_1.body)("date", "The date field must have a correct format.").isDate(),
    (0, express_validator_1.body)("phone", "This field must exists").exists(),
    (0, express_validator_1.body)("phone", "The cell phone number must have an argentinian format").matches(/^(\+?54)?9\d{10}$/),
    (0, express_validator_1.body)("location", "This field must exists").exists(),
    (0, express_validator_1.body)("location", "The location field cannot be empty").notEmpty(),
];
exports.validatorLogin = [
    (0, express_validator_1.body)("email", "Email format incorrect.").trim().isEmail().normalizeEmail(),
    (0, express_validator_1.body)("password", "Password format incorrect.").trim().isLength({ min: 8 }),
];
