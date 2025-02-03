import { db } from "@/prisma"

export const load = async ({ params }) => {
    const name = params.name.split("-").join(" ")

    const stream = async () => {
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
            },
            orderBy: {
                test: {
                    date: "asc"
                }
            }
        })

        const chartData = instances.map((instance) => ({
            value: instance.value,
            date: new Date(instance.test.date),
        }))

        return {
            chartData,
            substance: {
                name,
                instances
            }
        }
    }

    return { stream: stream() }
}