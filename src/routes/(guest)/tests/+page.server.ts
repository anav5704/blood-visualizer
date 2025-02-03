import { getAggregateStatus } from "@/utils/getAggregateStatus"
import { db } from "@/prisma"

export const load = async () => {
    const stream = async () => {
        const rawTests = await db.test.findMany({
            include: {
                substances: true
            },
            orderBy: {
                date: "desc"
            }
        })

        const tests = rawTests.map((test) => ({
            ...test,
            status: getAggregateStatus(test.substances)
        }))

        return { tests }
    }

    return { stream: stream() }
}