import db from "../config/db";
import { Response, Request } from "express";
import dotenv from "dotenv";
import Client from "../models/Client.model";
import {
  loginTokenService,
  verifyRefreshToken,
  ClientDataLogin,
  ClientData
} from "../services/auth.service";
dotenv.config();


export const register = async (data:any) => {
  try {
    const response = await db.models.Client.create(data);


    return response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: ClientDataLogin, res: Response) => {
  try {
    const email: string = data.email;
    const password: string = data.password;

    const token = await loginTokenService(email, password, res);

    return token;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    const token = verifyRefreshToken(refreshToken);

    return token;
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};
