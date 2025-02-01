import { getAggregateStatus } from "@/utils/getAggregateStatus"
import { substanceNames } from "@/utils/const"
import { db } from "@/prisma"

export const load = async () => {
    const substances = await db.substance.findMany({
        orderBy: {
            test: {
                date: 'desc'
            }
        }
    })

    const groupedSubstances = substanceNames.map((name) => {
        const substance = substances.filter(substance => substance.name === name)

        return {
            name,
            status: getAggregateStatus(substance)
        }
    })

    return { groupedSubstances }
}