"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const CORS_middleware_1 = require("./middlewares/CORS.middleware");
const error_middleware_1 = require("./middlewares/error.middleware");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(CORS_middleware_1.corsMiddleware);
(0, routes_1.routerAPI)(app);
app.use(error_middleware_1.errorLogging);
app.use(error_middleware_1.errorHandler);
exports.default = app;
