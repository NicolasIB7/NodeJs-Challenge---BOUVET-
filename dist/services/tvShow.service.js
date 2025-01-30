"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTvShow = void 0;
const db_1 = __importDefault(require("../config/db"));
const Director_model_1 = require("../models/Director.model");
const TvShow_model_1 = require("../models/TvShow/TvShow.model");
const findTvShow = async (id) => {
    try {
        const episode = await db_1.default.models.Episode.findOne({
            where: { id },
            include: [{ model: Director_model_1.Director }, { model: TvShow_model_1.TvShow }],
        });
        return episode;
    }
    catch (error) {
        throw error;
    }
};
exports.findTvShow = findTvShow;
