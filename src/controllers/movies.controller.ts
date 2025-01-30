import { findAllMovies } from "../services/movies.service";
import { Request, Response } from "express";

export const movies = async (req: Request, res: Response) => {
  try {
    const movies = await findAllMovies();

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Failed to retrieve movies" });
  }
};
