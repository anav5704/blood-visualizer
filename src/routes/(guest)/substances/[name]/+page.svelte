<script lang="ts">
    import SubstanceChart from "@/components/guest/SubstanceChart.svelte";
    import ChartLoader from "@/components/guest/ChartLoader.svelte";
    import { getTextColor } from "@/utils/getTextColor.js";
    import { LabPresets, Substances } from "@/utils/const/index.js";

    const { data } = $props();
</script>

{#await data.stream}
    <h1>Substances</h1>
    <ChartLoader />
{:then stream}
    <h1>
        Substances / {Substances.find((s) => stream.substance.name === s.id)
            ?.name}
    </h1>

    <div class="card p-6 space-y-6">
        <SubstanceChart data={stream.chartData} />

        <hr />

        {#each stream.substance.instances as { name, value, status, test }}
            {@const preset = LabPresets.find((p) => p.name === test.lab)}
            {@const { min, max } = preset?.values[name]}
            <div class="flex justify-between">
                <a href={"/tests/" + test.id}>{test.date.toDateString()}</a>
                <div class="flex">
                    <p class={getTextColor(status)}>
                        {value}
                    </p>
                    <p class="faded w-[100px] text-right">{min}-{max}</p>
                </div>
            </div>
        {/each}
    </div>
{/await}
