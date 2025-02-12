import { type Actions, redirect } from "@sveltejs/kit";
import type { Substance } from "@prisma/client";
import { db } from "@/prisma";
import { getSingularStatus } from "@/utils/getSingularStatus.js";

export const load = async ({ parent, params: { id } }) => {
    await parent();

    const test = await db.test.findUnique({
        where: {
            id,
        },
        include: {
            substances: true,
        },
    });

    return { test };
};

export const actions: Actions = {
    default: async ({ request, params: { id }, locals }) => {
        if (!locals.user) {
            redirect(303, "/login");
        }

        const data = await request.formData();

        const date = data.get("date") as string;
        const lab = data.get("lab") as string;
        const comment = (data.get("comment") as string) || null;

        if (!id || !date || !lab) {
            return {
                message: "Required fields are missing.",
            };
        }

        const names = data.getAll("name[]") as string[];
        const values = data.getAll("value[]") as string[];

        const substances: Substance[] = [];

        names.forEach((name, index) => {
            if (values[index]) {
                const status = getSingularStatus({
                    lab,
                    name: names[index],
                    value: parseFloat(values[index]),
                });

                substances.push({
                    id: crypto.randomUUID(),
                    name,
                    value: parseFloat(values[index]),
                    status,
                    testId: id,
                });
            }
        });

        try {
            await db.$transaction([
                db.test.update({
                    where: {
                        id,
                    },
                    data: {
                        lab,
                        comment,
                    },
                }),

                db.substance.deleteMany({
                    where: {
                        testId: id,
                    },
                }),

                db.substance.createMany({
                    data: substances,
                }),
            ]);
        } catch (error) {
            console.log(error);

            return {
                message: "There was an internal server error.",
            };
        }

        redirect(303, "/dash");
    },
};
