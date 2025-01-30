import { Request, Response } from "express"; 
import { getReasonPhrase } from "http-status-codes";
import { StatusCodes } from "http-status-codes";

export const success = (req: Request, res: Response, body: any, status: number | undefined) => {
  const statusCode = status || StatusCodes.OK;
  res.status(statusCode).json({
    error: false,
    statusCode, 
    body: body || getReasonPhrase(statusCode),
  });
};

