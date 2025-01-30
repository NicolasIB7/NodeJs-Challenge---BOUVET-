import { findAllMovies } from "../services/movies.service";
import { Request, Response } from "express";
import { findTvShow } from "../services/tvShow.service";

export const tvShows = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tvShow = await findTvShow(id);

    res.status(200).json({ tvShow });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Failed to retrieve movies" });
  }
};
