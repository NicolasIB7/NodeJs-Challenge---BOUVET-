"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodeTvShows = void 0;
const tvShow_service_1 = require("../services/tvShow.service");
const episodeTvShows = async (req, res) => {
    const { tvShowId, seasonId, episodeId } = req.params;
    try {
        const episodeTvShowData = await (0, tvShow_service_1.findEpisode)(tvShowId, seasonId, episodeId);
        if (!episodeTvShowData) {
            return res.status(404).json({ error: "Episode not found" });
        }
        res.status(200).json({ episodeTvShowData });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve episode" });
    }
};
exports.episodeTvShows = episodeTvShows;
