"use strict";
// import { Request, Response, NextFunction } from "express";
// import jwt, { Secret, JwtPayload } from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if (!token)
            throw new Error("Token does not exist, use bearer");
        token = token.split(" ")[1]; // Extraemos el token (por ejemplo "Bearer <token>")
        // Verificamos el token y obtenemos el payload
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.uid = payload.uid; // Asignamos el uid al request
        next(); // Continuamos con el siguiente middleware o controlador
    }
    catch (error) {
        // Si ocurre un error, respondemos con un código 401 y un mensaje
        res.status(401).json({ error: error.message });
    }
};
exports.requireToken = requireToken;
