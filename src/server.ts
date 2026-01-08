import express from "express";
import { rankingController } from "./controllers/ranking.controller";
const app = express();

app.get("/ranking", rankingController);

export default app;