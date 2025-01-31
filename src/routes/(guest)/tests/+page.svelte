<script lang="ts">
    import TestCard from "@/components/guest/TestCard.svelte";

    const { data } = $props();
</script>

<h1>Test Results</h1>

{#each data.tests as test}
    <TestCard {test} />
{/each}
