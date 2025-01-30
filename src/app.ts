import express from "express";
import morgan from "morgan";
import { corsMiddleware } from "./middlewares/CORS.middleware";
import { errorHandler, errorLogging } from "./middlewares/error.middleware";
import { routerAPI } from "./routes";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(corsMiddleware)
routerAPI(app)
app.use(errorLogging)
app.use(errorHandler)

export default app;
