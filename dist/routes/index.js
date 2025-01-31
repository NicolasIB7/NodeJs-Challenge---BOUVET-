"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAPI = void 0;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth.routes");
const movies_routes_1 = require("./movies.routes");
const tvShow_routes_1 = require("./tvShow.routes");
const actor_routes_1 = require("./actor.routes");
const routerAPI = (app) => {
    const routerV1 = express_1.default.Router();
    app.use("/api/v1", routerV1);
    routerV1.use("", auth_routes_1.authRouter);
    routerV1.use("/movies", movies_routes_1.moviesRouter);
    routerV1.use("/tvshow", tvShow_routes_1.tvShowRouter);
    routerV1.use("/actor", actor_routes_1.actorRouter);
};
exports.routerAPI = routerAPI;
