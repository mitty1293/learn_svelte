<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData, ActionData } from './$types';

    export let data: PageData;
    export let form: ActionData;
</script>

<h1>Todo</h1>

<form method="POST" action="?/create" use:enhance>
  <div>
    <label for="name">Name:</label>
    <input name="name" id="name" value={form?.name ?? ''} />
    {#if form?.message}<p class="error">{form.message}</p>{/if}
  </div>
  <button type="submit">Add</button>
</form>


<ul>
  {#each data.todos as todo}
    <li style="display:flex">
      <span>{todo.name}</span>
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={todo.id} />
        <button>X</button>
      </form>
    </li>
  {/each}
</ul>

<style>
	.error {
		padding: 0.5em;
		font-weight: 900;
		color: white;
		background-color: red;
	}
</style>