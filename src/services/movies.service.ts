import db from "../config/db";
import { Actor } from "../models/Actor.model";
import { Director } from "../models/Director.model";

export const findAllMovies = async () => {
  try {
    const movies = await db.models.Movie.findAll({
      include: [{ model: Director }, { model: Actor }],
    });

    return movies;
  } catch (error: any) {
    throw error;
  }
};
