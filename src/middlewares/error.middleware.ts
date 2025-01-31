import { Request, Response, NextFunction } from "express";

export const errorLogging = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  next(err);
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    error: true,
    status: 500,
    body: { message: "Internal Server Error", err },
  });
};
