import { Status } from "@prisma/client";

export const getTextColor = (status: Status) => {
    if (status === Status.GOOD) {
        return "text-emerald-500";
    }

    if (status === Status.OK) {
        return "text-amber-500";
    }

    if (status === Status.BAD) {
        return "text-rose-500";
    }
};
