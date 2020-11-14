<script>
    export let title = "";
    export let description = "";
    export let price = "";
</script>

<div class="card border-none border-2 text-center mb-4">
    <img class="w-32 inline-block" src="https://cf.shopee.co.id/file/ccf509eab1949567f49068a34d1f5481" alt="product">
    <h3 class="font-bold">{title}</h3>
    <p class="text-xs font-thin">{description}</p>
    <h4 class="font-semibold text-sm">{price}</h4>
</div>

<style>
    .card {
        max-width: 9rem;
    }

</style>