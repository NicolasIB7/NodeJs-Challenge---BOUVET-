"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const Client_model_1 = require("../models/Client.model");
const Movie_model_1 = require("../models/Movie.model");
const Actor_model_1 = require("../models/Actor.model");
const Director_model_1 = require("../models/Director.model");
const TvShow_model_1 = require("../models/TvShow/TvShow.model");
const Season_model_1 = require("../models/TvShow/Season.model");
const Episode_model_1 = require("../models/TvShow/Episode.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
dotenv_1.default.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    username: "postgres",
    password: "admin",
    database: "postgres",
    logging: false,
    models: [Client_model_1.Client, Movie_model_1.Movie, Actor_model_1.Actor, Director_model_1.Director, TvShow_model_1.TvShow, Season_model_1.Season, Episode_model_1.Episode],
});
Client_model_1.Client.addHook('beforeSave', async (client) => {
    if (client.changed('password')) {
        const salt = await bcryptjs_1.default.genSalt(10);
        client.password = await bcryptjs_1.default.hash(client.password, salt);
    }
});
// sequelize.addModels([Client, Movie, Actor, Director, TvShow, Season, Episode]);
exports.default = sequelize;
