<script lang="ts">
    import { getSingularStatus } from "@/utils/getSingularStatus";
    import type { Substance } from "@prisma/client";
    import { Status } from "@/utils/const/status";

    const { data } = $props();

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

<h1>Test Results / {data.test?.date.toDateString()}</h1>

<div class="card space-y-6 p-6">
    <p>Lab: {data.test?.lab}</p>

    <hr />

    {#each data.test?.substances as substance}
        <div class="flex justify-between">
            <p>{substance.name}</p>
            <div class="flex gap-10">
                <p class={getColor(substance)}>{substance.value}</p>
                <p class="text-zinc-500">{substance.min}-{substance.max}</p>
            </div>
        </div>
    {/each}

    <hr />

    <p>Comment: {data.test?.comment}</p>
</div>
