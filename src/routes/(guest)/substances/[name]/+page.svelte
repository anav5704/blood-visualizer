<script lang="ts">
    import ChartLoader from "@/components/guest/ChartLoader.svelte";
    import SubstanceChart from "@/components/guest/SubstanceChart.svelte";
    import { getTextColor } from "@/utils/getTextColor.js";

    const { data } = $props();
</script>

{#await data.stream}
    <h1>Substances</h1>
    <ChartLoader />
{:then stream}
    <h1>Substances / {stream.substance.name.split("-").join(" ")}</h1>

    <div class="card p-6 space-y-6">
        <SubstanceChart data={stream.chartData} />

        <hr />

        {#each stream.substance.instances as instance}
            <div class="flex justify-between">
                <p>{instance.test.date.toDateString()}</p>
                <div class="flex gap-10">
                    <p class={getTextColor(instance)}>{instance.value}</p>
                    <p class="text-zinc-500">{instance.min}-{instance.max}</p>
                </div>
            </div>
        {/each}
    </div>
{/await}
