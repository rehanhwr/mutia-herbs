<script>
	import Navbar from './Navbar.svelte'
	import Sidebar from './Sidebar.svelte'
	import Main from './Main.svelte'
	import Banner from './Banner.svelte'

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Banner src="/banner.png" alt="Banner Intro" />
<Main/>

<style>
	:global(body) {
		padding: 0;
		padding-top: 2.5rem;
		background-color: #f2efea; /* light neutral */
	}
</style>