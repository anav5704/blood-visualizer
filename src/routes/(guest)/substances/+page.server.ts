import { getSubstanceStatus } from "@/utils/getSubstanceStatus"
import { substanceNames } from "@/const"
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
            status: getSubstanceStatus(substance)
        }
    })

    return { groupedSubstances }
}