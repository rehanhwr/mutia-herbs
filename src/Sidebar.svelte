<script>
	export let open = false
</script>

<aside class="fixed top-0  w-full h-full pt-3 bg-gray-200 border-r-2 shadow-lg overflow-x-hidden" class:open on:click|self={() => open = !open}>
	<nav class="p-12 text-xl">
		<a class="block" href="#jamu">Jamu</a>
		<a class="block" href="#cupping">Cupping</a>
		<a class="block" href="#buku">Buku</a>
		<a class="block" href="#Nuskin">Nuskin</a>
	</nav>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out;
	}
	
	.open {
		right: 0;
	}
</style>