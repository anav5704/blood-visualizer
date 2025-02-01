import type { Substance } from "@prisma/client"
import { Status } from "@/utils/const"

export const getSingularStatus = (substance: Substance) => {
    const { value, min, max } = substance

    const midpoint = (max + min) / 2
    const range = max - min
    const deviation = Math.abs(value - midpoint) / (range / 2)

    if (value < min || value > max) {
        return Status.bad
    }

    if (deviation > 0.7) {
        return Status.ok
    }

    else {
        return Status.good
    }
}