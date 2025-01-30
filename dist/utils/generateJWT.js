"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH = process.env.JWT_REFRESH;
const generateToken = (id) => {
    const expiresIn = 60 * 15;
    try {
        const token = jsonwebtoken_1.default.sign({ id }, JWT_SECRET, { expiresIn });
        return { token, expiresIn };
    }
    catch (error) {
        console.error(error);
    }
};
exports.generateToken = generateToken;
const generateRefreshToken = (id, res) => {
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jsonwebtoken_1.default.sign({ id }, JWT_REFRESH, {
            expiresIn,
        });
        return res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000),
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.generateRefreshToken = generateRefreshToken;
