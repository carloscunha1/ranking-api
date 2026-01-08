import { prisma } from "../client/prisma";

export async function generateRanking() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      score: true,
    },
    orderBy: { score: "desc" },
  });

  let currentRank = 1;

  const rankedUsers = users.map((user, index) => {
    if (index > 0 && user.score < users[index - 1].score) {
      currentRank = index + 1;
    }

    return {
      rank: currentRank,
      name: user.name,
      score: user.score,
    };
  });

  return rankedUsers;
}
