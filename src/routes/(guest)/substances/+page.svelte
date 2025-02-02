<script lang="ts">
    import SubstanceCard from "@/components/guest/SubstanceCard.svelte";

    const { data } = $props();
</script>

<h1>Substances</h1>

{#each data.substances as substance}
    <SubstanceCard {substance} />
{/each}
