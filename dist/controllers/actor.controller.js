"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actor = void 0;
const actor_service_1 = require("../services/actor.service");
const actor = async (req, res) => {
    const data = req.body;
    try {
        const actor = await (0, actor_service_1.addActor)(data);
        res.status(200).json({ actor });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add an actor" });
    }
};
exports.actor = actor;
