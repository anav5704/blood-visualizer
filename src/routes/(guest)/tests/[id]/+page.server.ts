import { db } from "@/prisma"

export const load = async ({ params: { id } }) => {
    const stream = async () => {
        let test = await db.test.findUnique({
            where: {
                id
            },
            include: {
                substances: true
            }
        })

        return { test }
    }

    return { stream: stream() }
}