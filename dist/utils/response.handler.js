"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
const http_status_codes_1 = require("http-status-codes");
const http_status_codes_2 = require("http-status-codes");
const success = (req, res, body, status) => {
    const statusCode = status || http_status_codes_2.StatusCodes.OK;
    res.status(statusCode).json({
        error: false,
        statusCode,
        body: body || (0, http_status_codes_1.getReasonPhrase)(statusCode),
    });
};
exports.success = success;
