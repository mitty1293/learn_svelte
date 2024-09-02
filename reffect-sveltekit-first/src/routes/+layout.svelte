<script>
    import {page} from '$app/stores';
    $: pathname = $page.url.pathname;
</script>

<nav>
    <a href="/" class:active={pathname === '/'}>home</a>
    <a href="/about" class:active={pathname === '/about'}>about</a>
    <a href="/user" class:active={pathname === '/user'}>user</a>
</nav>

<slot/>

<style>
    .active {
        color: red;
        font-weight: 900;
    }
</style>