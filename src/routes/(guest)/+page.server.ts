import { db } from "@/prisma";

export const load = async () => {
    const stream = async () => {
        const [test, testCount, substanceCount, healthyCount] =
            await db.$transaction([
                db.test.findFirst({
                    include: {
                        substances: true,
                    },
                    orderBy: {
                        date: "desc",
                    },
                }),

                db.test.count(),

                db.substance.count(),

                db.substance.count({
                    where: {
                        status: "GOOD",
                    },
                }),
            ]);

        return {
            test,
            testCount,
            substanceCount,
            healthyCount: Math.floor((healthyCount / substanceCount) * 100),
        };
    };

    return { stream: stream() };
};
