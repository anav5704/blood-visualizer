<script lang="ts">
    import ListLoader from "@/components/guest/ListLoader.svelte";
    import SubstanceCard from "@/components/guest/SubstanceCard.svelte";

    const { data } = $props();
</script>

<h1>Substances</h1>

{#await data.stream}
    <ListLoader />
{:then stream}
    {#each stream.substances as substance}
        <SubstanceCard {substance} />
    {/each}
{/await}
