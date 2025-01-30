"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movies = void 0;
const movies_service_1 = require("../services/movies.service");
const movies = async (req, res) => {
    try {
        const movies = await (0, movies_service_1.findAllMovies)();
        res.status(200).json({ movies });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve movies" });
    }
};
exports.movies = movies;
