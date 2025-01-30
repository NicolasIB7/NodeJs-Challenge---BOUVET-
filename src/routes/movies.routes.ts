import { Router, Request, Response } from "express";
import { requireToken } from "../middlewares/requireToken.middleware";
import { movies } from "../controllers/movies.controller";

const router = Router();

router.get("/movies", requireToken, movies);

export { router as moviesRouter };
