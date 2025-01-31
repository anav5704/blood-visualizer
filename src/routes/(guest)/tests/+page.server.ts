import { getTestStatus } from "@/utils/getTestStatus."
import { db } from "@/prisma"

export const load = async () => {
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
        status: getTestStatus(test.substances)
    }))

    return { tests }
}