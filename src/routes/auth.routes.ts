import { Router, Request, Response } from "express";
import { register, login, refreshToken } from "../controllers/auth.controller";
import {
  validatorRegister,
  validatorLogin,
} from "../middlewares/validators.middleware";
// import { validatorResultError } from "../middlewares/validatorResultError.middleware";

// var jwt = require('jsonwebtoken');

const router = Router();

router.post(
  "/register",
  validatorRegister,
  async (req: Request, res: Response) => {
    try {
      const { repassword, ...data } = req.body;
      const createRegister = await register(data);

      if (!createRegister) throw new Error("Could not register");

      res.status(201).json(createRegister);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.post("/refreshToken", async (req: Request, res: Response) => {
  try {
    const newAccessToken = await refreshToken(req, res);

    res.status(200).json({
      message: "Refresh Token created successfully",
      accessToken: newAccessToken,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", validatorLogin, async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const clientLogin = await login(data, res);
    const token = clientLogin?.token;

    res.status(200).json({ message: "Client login succesfully", token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});


export { router as authRouter };
