<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	console.log($page);

	export let data: PageData;
</script>

<h1>ユーザー詳細画面</h1>
<p>id:{data.user.id}</p>
<p>name:{data.user.name}</p>