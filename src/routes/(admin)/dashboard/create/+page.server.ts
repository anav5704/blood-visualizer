import type { Substance, SubstanceName } from "@prisma/client"
import { type Actions, redirect } from "@sveltejs/kit"
import { db } from "@/prisma"

export const load = async ({ parent }) => {
    await parent()
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "login")
        }

        const data = await request.formData()

        const date = data.get("date") as string
        const lab = data.get("lab") as string
        const comment = data.get("comment") as string || null

        if (!date || !lab) {
            return {
                message: "Required fields are missing."
            }
        }

        const names = data.getAll('name[]') as string[]
        const values = data.getAll('value[]') as string[]
        const mins = data.getAll('min[]') as string[]
        const maxs = data.getAll('max[]') as string[]

        const substances: Substance[] = []

        names.forEach((name, index) => {
            if (values[index]) {
                substances.push({
                    id: crypto.randomUUID(),
                    name: name as SubstanceName,
                    value: parseFloat(values[index]),
                    min: parseFloat(mins[index]),
                    max: parseFloat(maxs[index]),
                    testId: "",
                })
            }
        })

        try {
            await db.$transaction(async (tx) => {
                const test = await tx.test.create({
                    data: {
                        date: new Date(date),
                        lab,
                        comment
                    }
                })

                await tx.substance.createMany({
                    data: substances.map((substance) => ({
                        ...substance,
                        testId: test.id
                    }))
                })
            })

        } catch (error) {
            console.log(error)

            return {
                message: "There was an internal server error."
            }
        }

        redirect(303, "/dashboard")
    }
}