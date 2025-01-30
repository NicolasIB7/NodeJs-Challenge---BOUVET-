import { Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
const JWT_REFRESH: string | undefined = process.env.JWT_REFRESH;

export const generateToken = (id: number) => {
  const expiresIn = 60 * 15;
  try {
    const token = jwt.sign({ id }, JWT_SECRET as Secret, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.error(error);
  }
};

export const generateRefreshToken = (id: number, res: Response) => {
  const expiresIn = 60 * 60 * 24 * 30;

  try {
    const refreshToken = jwt.sign({ id }, JWT_REFRESH as Secret, {
      expiresIn,
    });

    return res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: !(process.env.MODO === "developer"),
      expires: new Date(Date.now() + expiresIn * 1000),
    });
  } catch (error) {
    console.error(error);
  }
};
