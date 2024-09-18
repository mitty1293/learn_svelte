import type { PageServerLoad, Actions } from "./$types";
import { prisma } from "$lib/db";
import { fail } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const name = data.get("name") as string;
        if (name.length < 3) {
            return fail(400, {name, message: "name must contain 3 charactors."});
        }
        await prisma.todo.create({
            data: {
                name
            }
        });
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get("id"));
        await prisma.todo.delete({
            where: {
                id
            }
        });
    }
} satisfies Actions;

export const load = (async () => {
    const todos = await prisma.todo.findMany();
    return {
        todos
    };
}) satisfies PageServerLoad;
