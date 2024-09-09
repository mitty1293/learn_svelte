import type { PageServerLoad, Actions } from "./$types";
import { prisma } from "$lib/db";

export const actions = {
    create: async ({ request }) => {
        console.log("create");
        const data = await request.formData();
        console.log(data);
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
