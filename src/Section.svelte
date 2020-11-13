<script>
    import Card from "./Card.svelte"

    export let sectionData = [];
</script>


{#each sectionData as sectionDatum (sectionDatum.id)}
    <div class="mb-2">
        <div class="flex flex-col">
            <div class="flex justify-center">
                <h1 class="text-black mb-2 px-2 text-lg font-bold">{sectionDatum.title}</h1>
            </div>
            <div class="flex flex-wrap justify-center">
                {#each sectionDatum.products as product (product.id)}
                    <Card title={product.title} description={product.description} price={product.price} />
                {/each}
            </div>
        </div>
    </div>
{/each}

<style>

</style>