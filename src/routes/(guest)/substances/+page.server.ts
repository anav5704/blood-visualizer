import { getAggregateStatus } from "@/utils/getAggregateStatus";
import { Substances } from "@/utils/const";
import { db } from "@/prisma";

export const load = async () => {
    const stream = async () => {
        const rawSubstances = await db.substance.findMany({
            include: {
                test: true,
            },
            orderBy: {
                test: {
                    date: "desc",
                },
            },
        });

        const substances = Substances.map(({ id, name, category }) => {
            const substance = rawSubstances.filter(
                (substance) => substance.name === name
            );

            return {
                id,
                name,
                category,
                status: getAggregateStatus(substance),
            };
        });

        return { substances };
    };

    return { stream: stream() };
};
