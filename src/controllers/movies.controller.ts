import { findAllMovies } from "../services/movies.service";
import { Request, Response } from "express";

export const movies = async (req: Request, res: Response) => {
  const { genre, sortBy, sortOrder } = req.query;
  try {
    const movies = await findAllMovies({
      genre: genre as string,
      sortBy: sortBy as string,
      sortOrder: sortOrder as string,
    });

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Failed to retrieve movies" });
  }
};
