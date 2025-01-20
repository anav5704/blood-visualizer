import { redirect, type Actions } from "@sveltejs/kit"
import { db } from "@/prisma/index.js"

export const load = async ({ parent, url }) => {
    await parent()

    const id = url.searchParams.get("id") as string

    const test = await db.test.findUnique({
        where: {
            id
        }
    })

    return { test }
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) {
            redirect(303, "login")
        }

        const data = await request.formData()

        const id = data.get("id") as string

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

        redirect(303, "/dashboard")
    }
}