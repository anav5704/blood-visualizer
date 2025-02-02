<script lang="ts">
    import { Area, AreaChart, LinearGradient, Tooltip } from "layerchart";
    import { curveCatmullRom } from "d3-shape";

    const { data } = $props();
</script>

<div class="h-[300px]">
    <AreaChart
        {data}
        x="date"
        y="value"
        axis={false}
        grid={false}
        props={{
            highlight: {
                points: {
                    class: "stroke-2 stroke-white fill-zinc-900",
                },
            },
        }}
    >
        <svelte:fragment slot="tooltip" let:x let:y let:height let:padding>
            <Tooltip.Root
                class="card border border-zinc-800 text-base whitespace-nowrap"
                x="data"
                y={height * 0.9}
                anchor="center"
                contained={false}
                let:data
            >
                {y(data)} - {x(data).toDateString()}
            </Tooltip.Root>
        </svelte:fragment>

        <svelte:fragment slot="marks">
            <LinearGradient
                class="from-zinc-500 to-zinc-900/0"
                vertical
                let:gradient
            >
                <Area
                    line={{ class: "stroke-white stroke-2" }}
                    curve={curveCatmullRom}
                    fill={gradient}
                />
            </LinearGradient>
        </svelte:fragment>
    </AreaChart>
</div>
