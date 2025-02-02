import { getAggregateStatus } from "@/utils/getAggregateStatus"
import { Substances } from "@/utils/const"
import { db } from "@/prisma"

export const load = async () => {
    const rawSubstances = await db.substance.findMany({
        orderBy: {
            test: {
                date: 'desc'
            }
        }
    })

    const substances = Substances.map(({ name, category }) => {
        const substance = rawSubstances.filter(substance => substance.name === name)

        return {
            name,
            category,
            status: getAggregateStatus(substance)
        }
    })

    return { substances }
}