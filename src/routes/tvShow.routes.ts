import { Router } from "express";
import { requireToken } from "../middlewares/requireToken.middleware";
import { episodeTvShows } from "../controllers/tvShow.controller";

const router = Router();

router.get(
  "/:tvShowId/seasons/:seasonId/episodes/:episodeId",
  requireToken,
  episodeTvShows
);

export { router as tvShowRouter };
