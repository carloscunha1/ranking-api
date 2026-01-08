import { prisma } from "../client/prisma";

export async function generateRanking() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      score: true,
    },
    orderBy: { score: "desc" },
  });

  const rankedUsers = users.map((user, index) => ({
    rank: index + 1,
    name: user.name,
    score: user.score
  }));

  return rankedUsers;
}
