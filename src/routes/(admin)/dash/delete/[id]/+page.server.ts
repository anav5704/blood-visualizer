import { redirect, type Actions } from "@sveltejs/kit"
import { db } from "@/prisma"

export const load = async ({ parent, params: { id } }) => {
    await parent()

    const test = await db.test.findUnique({
        where: {
            id
        }
    })

    return { test }
}

export const actions: Actions = {
    default: async ({ params: { id }, locals }) => {
        if (!locals.user) {
            redirect(303, "/login")
        }

        if (!id) {
            return {
                message: "Required fields are missing."
            }
        }

        try {
            await db.test.delete({
                where: {
                    id
                }
            })

        } catch (error) {
            console.log(error)

            return {
                message: "There was an internal server error."
            }
        }

        redirect(303, "/dash")
    }
}