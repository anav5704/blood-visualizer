import { db } from "@/prisma"

export const load = async () => {
    const [test, testCount, substanceCount, healthyCount] = await db.$transaction([
        db.test.findFirst({
            include: {
                substances: true,
            },
            orderBy: {
                date: "desc"
            }
        }),

        db.test.count(),

        db.substance.count(),

        db.substance.count({
            where: {
                AND: [
                    { value: { gt: db.substance.fields.min } },
                    { value: { lt: db.substance.fields.max } },
                ],
            },
        })
    ])

    return {
        test,
        count: {
            test: testCount,
            substance: substanceCount,
            healthy: Math.floor((healthyCount / substanceCount) * 100)
        }
    }
}