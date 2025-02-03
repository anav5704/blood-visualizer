<script lang="ts">
    import ListLoader from "@/components/guest/ListLoader.svelte";
    import TestCard from "@/components/guest/TestCard.svelte";

    const { data } = $props();
</script>

<h1>Test Results</h1>

{#await data.stream}
    <ListLoader />
{:then stream}
    {#each stream.tests as test}
        <TestCard {test} />
    {/each}
{/await}
