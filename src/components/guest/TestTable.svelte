<script lang="ts">
    import { LabPresets, Substances } from "@/utils/const";
    import { getTextColor } from "@/utils/getTextColor";

    const { test } = $props();
</script>

<div class="card space-y-6 p-6">
    <div class="flex justify-between">
        <p>{test.lab}</p>
        <p class="faded">{test.date.toDateString()}</p>
    </div>

    <hr />

    {#each test.substances as { name, value, status }}
        {@const preset = LabPresets.find((p) => p.name === test.lab)}
        {@const substance = Substances.find((s) => s.id === name)}
        {@const { min, max } = preset?.values[name]}

        <div class="flex justify-between">
            <a href={"/substances/" + name}>{substance?.name}</a>
            <div class="flex">
                <p class={getTextColor(status)}>
                    {value}
                </p>
                <p class="faded w-[100px] text-right">
                    {min}-{max}
                </p>
            </div>
        </div>
    {/each}

    {#if test.commet}
        <hr />
        <p>Comment: {test.comment}</p>
    {/if}
</div>
