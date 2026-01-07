import express from "express";
import { getRanking } from "./services/listRanking";

const app = express();

app.get("/ranking", getRanking);

export default app;