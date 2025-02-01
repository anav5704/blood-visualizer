import { error } from "@sveltejs/kit"
import { db } from "@/prisma"

export const load = async ({ params: { id } }) => {
    const test = await db.test.findUnique({
        where: {
            id
        },
        include: {
            substances: true
        }
    })

    if (!test) {
        error(404, "Test not found")
    }

    return { test }
}