<script lang="ts">
    import ListLoader from "@/components/guest/ListLoader.svelte";
    import TestCard from "@/components/admin/TestCard.svelte";

    const { data } = $props();
</script>

<h1>Dashboard</h1>

<div class="flex gap-5">
    <input class="grow" placeholder="Search..." type="search" />
    <a class="card" href="/dash/create">Add Results</a>
</div>

{#await data.stream}
    <ListLoader />
{:then stream}
    {#each stream.tests as test}
        <TestCard {test} />
    {/each}
{/await}
