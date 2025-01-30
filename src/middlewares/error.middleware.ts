import { getReasonPhrase } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express';

export const errorLogging =(err:any, req:Request, res:Response, next:NextFunction)=> {
  console.error(err)
  next(err)
}

// export const boomErrorHandler=(err:any, req:Request, res:Response, next:NextFunction)=> {
//   if (err.isBoom) {
//     const { output } = err
//     return res.status(output.statusCode).json({
//       error: true,
//       status: output.statusCode,
//       body: output.payload ? output.payload : getReasonPhrase(output.payload)
//     })
//   }
//   next(err)
// }

export const errorHandler=(err:any, req:Request, res:Response, next:NextFunction)=> {
  res.status(500).json({
    error: true,
    status: 500,
    body: { message: 'Internal Server Error',err }
  })
}