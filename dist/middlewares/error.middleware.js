"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorLogging = void 0;
const errorLogging = (err, req, res, next) => {
    console.error(err);
    next(err);
};
exports.errorLogging = errorLogging;
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        error: true,
        status: 500,
        body: { message: "Internal Server Error", err },
    });
};
exports.errorHandler = errorHandler;
