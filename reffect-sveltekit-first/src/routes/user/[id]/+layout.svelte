<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.user.name}</title>
</svelte:head>
<slot />
