import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Client } from "../models/Client.model";
import { Movie } from "../models/Movie.model";
import { Actor } from "../models/Actor.model";
import { Director } from "../models/Director.model";
import { TvShow } from "../models/TvShow/TvShow.model";
import { Season } from "../models/TvShow/Season.model";
import { Episode } from "../models/TvShow/Episode.model";
import bcrypt from "bcryptjs";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  username: DB_NAME,
  password: DB_PASSWORD,
  database: DB_USER,
  logging: false,
  models: [Client, Movie, Actor, Director, TvShow, Season, Episode],
});

Client.addHook("beforeSave", async (client: Client) => {
  if (client.changed("password")) {
    const salt = await bcrypt.genSalt(10);
    client.password = await bcrypt.hash(client.password, salt);
  }
});

export default sequelize;
