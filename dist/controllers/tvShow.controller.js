"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvShows = void 0;
const tvShow_service_1 = require("../services/tvShow.service");
const tvShows = async (req, res) => {
    const { id } = req.params;
    try {
        const tvShow = await (0, tvShow_service_1.findTvShow)(id);
        res.status(200).json({ tvShow });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve movies" });
    }
};
exports.tvShows = tvShows;
