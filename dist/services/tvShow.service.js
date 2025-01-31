"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEpisode = void 0;
const db_1 = __importDefault(require("../config/db"));
const findEpisode = async (tvShowId, seasonId, episodeId) => {
    try {
        const episode = await db_1.default.models.Episode.findOne({
            where: { id: episodeId },
            include: [
                {
                    model: db_1.default.models.Season,
                    where: { id: seasonId },
                    include: [
                        {
                            model: db_1.default.models.TvShow,
                            where: { id: tvShowId },
                            include: [
                                {
                                    model: db_1.default.models.Director,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        return episode;
    }
    catch (error) {
        throw error;
    }
};
exports.findEpisode = findEpisode;
