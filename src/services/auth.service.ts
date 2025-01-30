import { generateToken, generateRefreshToken } from "../utils/generateJWT";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Client } from "../models/Client.model";
import db from "../config/db";
import dotenv from "dotenv";
dotenv.config();

interface DbInstance extends Sequelize {
  Client: typeof Client;
}

interface MyJwtPayload extends JwtPayload {
  uid: string;
}

export const JWT_REFRESH: string | undefined = process.env.JWT_REFRESH;

export interface ClientData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthDate: string;
}
export interface ClientDataLogin {
  email: string;
  password: string;
}

export const loginTokenService = async (
  email: string,
  password: string,
  res: Response
) => {
  try {
    const client = (await db.models.Client.findOne({
      where: { email },
    })) as Client;
    if (!client) throw { message: "Client not found" };

    const confirmPassword = await client.comparePassword(password);
    if (!confirmPassword) throw { message: "Password is incorrect" };

    const token = generateToken(client.id);
    generateRefreshToken(client.id, res);
    return token;
  } catch (error: any) {
    throw error;
  }
};

export const verifyRefreshToken = async (refreshToken: string) => {
  try {
    if (!refreshToken) throw new Error("Token does not exist, use bearer");

    const payload = jwt.verify(
      refreshToken,
      JWT_REFRESH as Secret
    ) as MyJwtPayload;

    const token = generateToken(payload.id);

    return token;
  } catch (error: any) {
    throw error;
  }
};
