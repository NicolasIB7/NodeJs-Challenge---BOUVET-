"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRouter = void 0;
const express_1 = require("express");
const requireToken_middleware_1 = require("../middlewares/requireToken.middleware");
const movies_controller_1 = require("../controllers/movies.controller");
const router = (0, express_1.Router)();
exports.moviesRouter = router;
router.get("/movies", requireToken_middleware_1.requireToken, movies_controller_1.movies);
