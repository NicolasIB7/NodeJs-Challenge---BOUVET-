"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorRouter = void 0;
const express_1 = require("express");
const requireToken_middleware_1 = require("../middlewares/requireToken.middleware");
const actor_controller_1 = require("../controllers/actor.controller");
const router = (0, express_1.Router)();
exports.actorRouter = router;
router.post("/actor", requireToken_middleware_1.requireToken, actor_controller_1.actor);
