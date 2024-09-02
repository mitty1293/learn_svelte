import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        user
    };
}) satisfies PageServerLoad;
