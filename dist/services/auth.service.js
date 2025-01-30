"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.loginTokenService = exports.JWT_REFRESH = void 0;
const generateJWT_1 = require("../utils/generateJWT");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_REFRESH = process.env.JWT_REFRESH;
const loginTokenService = async (email, password, res) => {
    try {
        const client = (await db_1.default.models.Client.findOne({
            where: { email },
        }));
        if (!client)
            throw { message: "Client not found" };
        const confirmPassword = await client.comparePassword(password);
        if (!confirmPassword)
            throw { message: "Password is incorrect" };
        const token = (0, generateJWT_1.generateToken)(client.id);
        (0, generateJWT_1.generateRefreshToken)(client.id, res);
        return token;
    }
    catch (error) {
        throw error;
    }
};
exports.loginTokenService = loginTokenService;
const verifyRefreshToken = async (refreshToken) => {
    try {
        if (!refreshToken)
            throw new Error("Token does not exist, use bearer");
        const payload = jsonwebtoken_1.default.verify(refreshToken, exports.JWT_REFRESH);
        const token = (0, generateJWT_1.generateToken)(payload.id);
        return token;
    }
    catch (error) {
        throw error;
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
