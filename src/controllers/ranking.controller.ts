import { Request, Response } from "express";
import { generateRanking } from "../services/ranking.service";

export async function rankingController(req: Request, res: Response) {
  try {
    const data = await generateRanking();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao obter ranking:", error);
    return res.status(500).json({
      message: "Ocorreu um erro interno ao processar o ranking.",
    });
  }
}
