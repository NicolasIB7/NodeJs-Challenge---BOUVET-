import db from "../config/db";

import { Op } from "sequelize";

export const findAllMovies = async (filters: {
  genre?: string;
  sortBy?: string;
  sortOrder?: string;
}) => {
  try {
    const sortBy: any =
      filters.sortBy === "createdAt" ? "createdAt" : "createdAt";
    const sortOrder = filters.sortOrder === "ASC" ? "ASC" : "DESC";

    const movies = await db.models.Movie.findAll({
      where: filters.genre
        ? { genre: { [Op.iLike]: `%${filters.genre}%` } }
        : {},
      order: [[sortBy, sortOrder]],
    });

    return movies;
  } catch (error: any) {
    throw error;
  }
};
