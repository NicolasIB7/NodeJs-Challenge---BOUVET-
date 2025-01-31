import { Router } from "express";
import { requireToken } from "../middlewares/requireToken.middleware";
import { movies } from "../controllers/movies.controller";

const router = Router();

router.get("/", requireToken, movies);

export { router as moviesRouter };
