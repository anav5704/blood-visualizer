<script lang="ts">
    import SubstanceCard from "@/components/guest/SubstanceCard.svelte";
    import { substanceNames } from "@/utils/const";

    const { data } = $props();
</script>

<h1>Substances</h1>

{#each data.groupedSubstances as substance}
    <SubstanceCard {substance} />
{/each}
