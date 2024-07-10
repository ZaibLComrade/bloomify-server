import express from "express";
import cors from "cors";
import type { Express } from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(globalErrorHandler);

export default app;
