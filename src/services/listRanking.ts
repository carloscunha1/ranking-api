import { Request, Response } from "express";
import { prisma } from "../client/prisma";

export async function getRanking(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      score: true,
    },
    orderBy: { score: "desc" },
  });

  res.json(users);
}
