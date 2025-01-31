"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllMovies = void 0;
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
const findAllMovies = async (filters) => {
    try {
        const sortBy = filters.sortBy === 'createdAt' ? 'createdAt' : 'createdAt';
        const sortOrder = filters.sortOrder === 'ASC' ? 'ASC' : 'DESC';
        const movies = await db_1.default.models.Movie.findAll({
            where: filters.genre
                ? { genre: { [sequelize_1.Op.iLike]: `%${filters.genre}%` } }
                : {},
            order: [[sortBy, sortOrder]],
        });
        return movies;
    }
    catch (error) {
        throw error;
    }
};
exports.findAllMovies = findAllMovies;
