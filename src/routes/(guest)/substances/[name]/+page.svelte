<script lang="ts">
    import SubstanceChart from "@/components/guest/SubstanceChart.svelte";
    import { getTextColor } from "@/utils/getTextColor.js";

    const { data } = $props();

    const chartData = data.substance.instances.map((instance) => ({
        value: instance.value,
        date: new Date(instance.test.date),
    }));
</script>

<h1>Substances / {data.substance.name.split("-").join(" ")}</h1>

<div class="card p-6 space-y-6">
    <SubstanceChart data={chartData} />

    <hr />

    {#each data.substance.instances as instance}
        <div class="flex justify-between">
            <p>{instance.test.date.toDateString()}</p>
            <div class="flex gap-10">
                <p class={getTextColor(instance)}>{instance.value}</p>
                <p class="text-zinc-500">{instance.min}-{instance.max}</p>
            </div>
        </div>
    {/each}
</div>
