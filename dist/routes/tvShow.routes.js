"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvShowRouter = void 0;
const express_1 = require("express");
const requireToken_middleware_1 = require("../middlewares/requireToken.middleware");
const tvShow_controller_1 = require("../controllers/tvShow.controller");
const router = (0, express_1.Router)();
exports.tvShowRouter = router;
router.get("/tvshow/:id", requireToken_middleware_1.requireToken, tvShow_controller_1.tvShows);
