import db from "../config/db";
import { Director } from "../models/Director.model";
import { TvShow } from "../models/TvShow/TvShow.model";

export const findTvShow = async (id: string) => {
  try {
    const episode = await db.models.Episode.findOne({
      where: { id },
      include: [{ model: Director }, { model: TvShow }],
    });

    return episode;
  } catch (error: any) {
    throw error;
  }
};
