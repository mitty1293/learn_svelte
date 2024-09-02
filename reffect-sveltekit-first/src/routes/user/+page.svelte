<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
</script>

<h1>ユーザー一覧</h1>
<ul>
    {#each data.users as user}
        <li><a href={`/user/${user.id}`}>{user.name}</a></li>
    {/each}
</ul>