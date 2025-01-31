"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if (!token)
            throw new Error("Token does not exist, use bearer");
        token = token.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.uid = payload.uid;
        next();
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
};
exports.requireToken = requireToken;
