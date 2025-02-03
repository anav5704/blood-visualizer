import { db } from "@/prisma"

export const load = async () => {
    const data = db.$transaction([
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
        stream: data.then(([test, testCount, substanceCount, healthyCount]) => ({
            test,
            count: {
                test: testCount,
                substance: substanceCount,
                healthy: Math.floor((healthyCount / substanceCount) * 100)
            }
        }))
    }
}