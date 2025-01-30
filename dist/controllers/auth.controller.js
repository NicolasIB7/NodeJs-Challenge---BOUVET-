"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.login = exports.register = void 0;
const db_1 = __importDefault(require("../config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_service_1 = require("../services/auth.service");
dotenv_1.default.config();
const register = async (data) => {
    try {
        const response = await db_1.default.models.Client.create(data);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};
exports.register = register;
const login = async (data, res) => {
    try {
        const email = data.email;
        const password = data.password;
        const token = await (0, auth_service_1.loginTokenService)(email, password, res);
        return token;
    }
    catch (error) {
        throw error;
    }
};
exports.login = login;
const refreshToken = (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        const token = (0, auth_service_1.verifyRefreshToken)(refreshToken);
        return token;
    }
    catch (error) {
        return res.status(401).json({ error: error.message });
    }
};
exports.refreshToken = refreshToken;
