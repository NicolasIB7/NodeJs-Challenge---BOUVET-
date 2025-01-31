import db from "../config/db";

export const findEpisode = async (
  tvShowId: string,
  seasonId: string,
  episodeId: string
) => {
  try {
    const episode = await db.models.Episode.findOne({
      where: { id: episodeId },
      include: [
        {
          model: db.models.Season,
          where: { id: seasonId },
          include: [
            {
              model: db.models.TvShow,
              where: { id: tvShowId },
              include: [
                {
                  model: db.models.Director,
                },
              ],
            },
          ],
        },
      ],
    });

    return episode;
  } catch (error) {
    throw error;
  }
};
