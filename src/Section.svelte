<script>
    import Card from "./Card.svelte"

    export let sectionData = [];
</script>


{#each sectionData as sectionDatum (sectionDatum.id)}
    <div class="mb-2">
        <h1 class="text-black mb-2 px-2 text-lg font-bold">{sectionDatum.title}</h1>
        <div class="flex flex-wrap">
            {#each sectionDatum.products as product (product.id)}
                <Card title={product.title} description={product.description} price={product.price} />
            {/each}
        </div>
    </div>
{/each}

<style>

</style>