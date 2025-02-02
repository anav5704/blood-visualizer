<script lang="ts">
    import "@carbon/charts-svelte/styles.min.css";

    import {
        AreaChart,
        ScaleTypes,
        type ChartOptions,
    } from "@carbon/charts-svelte";
    import type { Substance } from "@prisma/client";
    import { getSingularStatus } from "@/utils/getSingularStatus.js";
    import { Status } from "@/utils/const/index.js";

    const options: ChartOptions = {
        theme: "g100",
        height: "350px",
        grid: {
            x: {
                enabled: false,
            },
            y: {
                enabled: false,
            },
        },
        axes: {
            bottom: {
                visible: false,
                mapsTo: "date",
                scaleType: ScaleTypes.TIME,
            },
            left: {
                visible: false,
                mapsTo: "value",
                scaleType: ScaleTypes.LINEAR,
            },
        },
        color: {
            gradient: {
                enabled: true,
            },
        },
        points: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        toolbar: {
            enabled: false,
        },
    };

    const { data } = $props();

    const chartData = data.substance.instances.map((instance) => ({
        value: instance.value,
        date: new Date(instance.test.date),
    }));

    const getColor = (substance: Substance) => {
        const status = getSingularStatus(substance);

        if (status === Status.good) {
            return "text-emerald-500";
        }

        if (status === Status.ok) {
            return "text-amber-500";
        }

        if (status === Status.bad) {
            return "text-rose-500";
        }
    };
</script>

<h1>Substances / {data.substance.name.split("-").join(" ")}</h1>

<!-- <select name="filter">
    <option value="1">1 Year</option>
    <option value="2">2 Years</option>
    <option value="3">3 Years</option>
    <option value="4">4 Years</option>
    <option value="5">5 Years</option>
</select> -->

<div class="card p-6 space-y-6">
    <AreaChart data={chartData} {options} />

    <hr />

    {#each data.substance.instances as instance}
        <div class="flex justify-between">
            <p>{instance.test.date.toDateString()}</p>
            <div class="flex gap-10">
                <p class={getColor(instance)}>{instance.value}</p>
                <p class="text-zinc-500">{instance.min}-{instance.max}</p>
            </div>
        </div>
    {/each}
</div>
