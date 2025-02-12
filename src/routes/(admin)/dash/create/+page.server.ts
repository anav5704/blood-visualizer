import { type Actions, redirect } from "@sveltejs/kit";
import type { Substance } from "@prisma/client";
import { db } from "@/prisma";
import { LabPresets, type ValueType } from "@/utils/const/index.js";
import { getSingularStatus } from "@/utils/getSingularStatus.js";

export const load = async ({ parent }) => {
    await parent();
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "/login");
        }

        const data = await request.formData();

        const date = data.get("date") as string;
        const lab = data.get("lab") as string;
        const comment = (data.get("comment") as string) || null;

        if (!date || !lab) {
            return {
                message: "Required fields are missing.",
            };
        }

        const names = data.getAll("name[]") as string[];
        const values = data.getAll("value[]") as string[];

        const testId = crypto.randomUUID();
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
                    testId,
                });
            }
        });

        try {
            await db.$transaction([
                db.test.create({
                    data: {
                        id: testId,
                        date: new Date(date),
                        lab,
                        comment,
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
