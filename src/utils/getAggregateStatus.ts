import { getSingularStatus } from "@/utils/getSingularStatus";
import type { Substance, Status, Test } from "@prisma/client";

export const getAggregateStatus = (
    substances: (Substance & { test: Test })[]
) => {
    if (substances.length === 0) return "BAD" as Status;

    const statuses = substances.map(({ name, value, test: { lab } }) =>
        getSingularStatus({
            lab,
            name,
            value,
        })
    );

    const statusCounts = {
        bad: statuses.filter((status) => status === "BAD").length,
        ok: statuses.filter((status) => status === "OK").length,
        good: statuses.filter((status) => status === "GOOD").length,
    };

    if (statusCounts.bad > substances.length * 0.1) {
        return "BAD" as Status;
    } else if (statusCounts.ok > substances.length * 0.3) {
        return "OK" as Status;
    } else {
        return "GOOD" as Status;
    }
};
