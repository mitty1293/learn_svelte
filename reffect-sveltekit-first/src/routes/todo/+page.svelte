<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
</script>

<h1>Todo</h1>
<ul>
    {#each data.todos as todo}
        <li>{todo.name}</li>
    {/each}
</ul>