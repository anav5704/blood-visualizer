import { SubstanceName } from "@prisma/client"

export const substanceNames = [
    SubstanceName.HEMOGLOBIN,
    SubstanceName.RED_BLOOD_CELLS,
    SubstanceName.WHITE_BLOOD_CELLS,
    SubstanceName.POTASSIUM,
    SubstanceName.SODIUM,
]

export enum Status {
    "good",
    "ok",
    "bad"

}