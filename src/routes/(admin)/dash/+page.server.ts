import { db } from "@/prisma/index.js"

export const load = async ({ parent }) => {
    await parent()

    const stream = async () => {
        const tests = await db.test.findMany({
            orderBy: {
                date: "desc"
            }
        })

        return { tests }
    }

    return { stream: stream() }
}