"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllMovies = void 0;
const db_1 = __importDefault(require("../config/db"));
const Actor_model_1 = require("../models/Actor.model");
const Director_model_1 = require("../models/Director.model");
const findAllMovies = async () => {
    try {
        const movies = await db_1.default.models.Movie.findAll({
            include: [{ model: Director_model_1.Director }, { model: Actor_model_1.Actor }],
        });
        return movies;
    }
    catch (error) {
        throw error;
    }
};
exports.findAllMovies = findAllMovies;
