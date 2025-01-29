import { db } from "@/prisma/index.js"

export const load = async ({ parent }) => {
    await parent()

    const tests = await db.test.findMany({
        orderBy: {
            date: "desc"
        }
    })

    return { tests }
}