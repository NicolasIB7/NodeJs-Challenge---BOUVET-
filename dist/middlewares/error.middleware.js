"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorLogging = void 0;
const errorLogging = (err, req, res, next) => {
    console.error(err);
    next(err);
};
exports.errorLogging = errorLogging;
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
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        error: true,
        status: 500,
        body: { message: 'Internal Server Error', err }
    });
};
exports.errorHandler = errorHandler;
