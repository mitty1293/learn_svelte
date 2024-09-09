<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
</script>

<h1>Todo</h1>

<form method="post" action="?/create">
    <div>
        <label for="name">Name:</label>
        <input name="name" id="name">
    </div>
    <button  type="submit">Add</button>
</form>

<ul>
    {#each data.todos as todo}
        <li style="display:flex;">
            <span>{todo.name}</span>
            <form method="post" action="?/delete">
                <input type="hidden" name="id" value={todo.id}>
                <button>X</button>
            </form>
        </li>
    {/each}
</ul>