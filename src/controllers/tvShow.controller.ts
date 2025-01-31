import { Request, Response } from "express";
import { findEpisode } from "../services/tvShow.service";

export const episodeTvShows = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { tvShowId, seasonId, episodeId } = req.params;
  try {
    const episodeTvShowData = await findEpisode(tvShowId, seasonId, episodeId);

    if (!episodeTvShowData) {
      return res.status(404).json({ error: "Episode not found" });
    }

    res.status(200).json({ episodeTvShowData });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Failed to retrieve episode" });
  }
};
