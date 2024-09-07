import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/db";

export const load = (async () => {
    const todos = await prisma.todo.findMany();
    return {
        todos
    };
}) satisfies PageServerLoad;
