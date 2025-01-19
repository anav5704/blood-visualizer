import { PASSWORD } from "$env/static/private"
import { redirect } from "@sveltejs/kit"
import { db } from "@/prisma"

export const load = async ({ url }) => {
    const password = url.searchParams.get("password")

    if (!password) {
        console.log("No password")
        redirect(303, "/")
    }

    if (password !== PASSWORD) {
        console.log("Incorrect password")
        redirect(303, "/")
    }

    // const tests = await db.test.findMany({
    //     orderBy: {
    //         date: "desc"
    //     }
    // })

    // return { tests }
}