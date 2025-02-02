import { getSingularStatus } from "@/utils/getSingularStatus"
import type { Substance } from "@prisma/client"
import { Status } from "@/utils/const"

export const getTextColor = (substance: Substance) => {
    const status = getSingularStatus(substance)

    if (status === Status.good) {
        return "text-emerald-500"
    }

    if (status === Status.ok) {
        return "text-amber-500"
    }

    if (status === Status.bad) {
        return "text-rose-500"
    }
}