import { db } from "@/prisma"

export const load = async ({ params }) => {

    const name = params.name.split("-").join(" ")

    const instances = await db.substance.findMany({
        where: {
            name
        },
        include: {
            test: {
                select: {
                    date: true
                }
            }
        }
    })

    return {
        substance: {
            name,
            instances
        }
    }
}