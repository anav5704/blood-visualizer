import type { Substance } from "@prisma/client"
import { getSingularStatus } from "@/utils/getSingularStatus"
import { Status } from "@/utils/const"

export const getAggregateStatus = (substances: Substance[]) => {
    if (substances.length === 0) return Status.bad

    const statuses = substances.map((substance) => getSingularStatus(substance))

    const statusCounts = {
        bad: statuses.filter((status) => status === Status.bad).length,
        ok: statuses.filter((status) => status === Status.ok).length,
        good: statuses.filter((status) => status === Status.good).length,
    }

    if (statusCounts.bad > substances.length * 0.1) {
        return Status.bad
    }

    else if (statusCounts.ok > substances.length * 0.3) {
        return Status.ok
    }

    else {
        return Status.good
    }
}
