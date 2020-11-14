<script>
	import Section from './Section.svelte'

	let products = [
		{ title: "Product A", description: "Description but not too long", price: "IDR50.000", id: 1 },
		{ title: "Product B", description: "Description but not too long", price: "IDR150.000", id: 2 },
		{ title: "Product C", description: "Description but not too long", price: "IDR25.000", id: 3 },
		{ title: "Product D", description: "Description but not too long", price: "IDR40.000", id: 4 },
		{ title: "Product E", description: "Description but not too long", price: "IDR100.000", id: 5 }
	];
	let sectionData = [
		{
			title: "Jamu",
			products: products,
			id: 1
		},
		{
			title: "Buku",
			products: products,
			id: 2
		},
		{
			title: "Cupping",
			products: products,
			id: 3
		},
	]
</script>

<main class="p-4 text-dark-primary">
	<Section sectionData={sectionData} />
</main>

<style>

</style>