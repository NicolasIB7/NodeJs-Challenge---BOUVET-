"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRouter = void 0;
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
const router = (0, express_1.Router)();
exports.moviesRouter = router;
router.get("/", movies_controller_1.movies);
