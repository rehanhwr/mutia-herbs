<script>
	import Logo from './Logo.svelte'
	import Hamburger from './Hamburger.svelte'
	
	export let sidebar = false
</script>

<header class="fixed w-full top-0 bg-gray-200 p-2 items-center text-gray-600 border-b-2" class:sidebar>
    <nav class="flex justify-between mx-2">
        <Logo/>	
        <Hamburger bind:open={sidebar} />
    </nav>
</header>

<style>
    .sidebar {
        position: fixed;
    }
</style>