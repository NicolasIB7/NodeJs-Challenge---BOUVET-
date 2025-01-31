import express from "express";
import { authRouter } from "./auth.routes";
import { moviesRouter } from "./movies.routes";
import { tvShowRouter } from "./tvShow.routes";
import { actorRouter } from "./actor.routes";

export const routerAPI = (app: any) => {
  const routerV1 = express.Router();

  app.use("/api/v1", routerV1);
  routerV1.use("", authRouter);
  routerV1.use("/movies", moviesRouter);
  routerV1.use("/tvshow", tvShowRouter);
  routerV1.use("/actor", actorRouter);
};
