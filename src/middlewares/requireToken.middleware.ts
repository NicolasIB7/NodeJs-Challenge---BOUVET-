// import { Request, Response, NextFunction } from "express";
// import jwt, { Secret, JwtPayload } from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

// interface RequestWithUID extends Request {
//   uid?: string;
// }

// interface MyJwtPayload extends JwtPayload {
//   uid: string;
// }

// export const requireToken = (req: RequestWithUID, res: Response, next: NextFunction) => {
//   try {
//     let token = req.headers?.authorization; 

//     if (!token) throw new Error("Token does not exist, use bearer");

//     token = token.split(" ")[1];

//     const payload = jwt.verify(token, JWT_SECRET as Secret) as MyJwtPayload;

//     req.uid = payload.uid;

//     next();
//   } catch (error: any) {
//     return res.status(401).json({ error: error.message });
//   }
// };

import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

interface RequestWithUID extends Request {
  uid?: string;
}

interface MyJwtPayload extends JwtPayload {
  uid: string;
}

export const requireToken = (req: RequestWithUID, res: Response, next: NextFunction): void => {
  try {
    let token = req.headers?.authorization; 

    if (!token) throw new Error("Token does not exist, use bearer");

    token = token.split(" ")[1]; // Extraemos el token (por ejemplo "Bearer <token>")

    // Verificamos el token y obtenemos el payload
    const payload = jwt.verify(token, JWT_SECRET as Secret) as MyJwtPayload;

    req.uid = payload.uid;  // Asignamos el uid al request

    next();  // Continuamos con el siguiente middleware o controlador
  } catch (error: any) {
    // Si ocurre un error, respondemos con un código 401 y un mensaje
     res.status(401).json({ error: error.message });
  }
};
