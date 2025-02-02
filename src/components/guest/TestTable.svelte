<script lang="ts">
    import { getTextColor } from "@/utils/getTextColor";

    const { test } = $props();
</script>

<div class="card space-y-6 p-6">
    <div class="flex justify-between">
        <p>Lab: {test.lab}</p>
        <p class="faded">{test.date.toDateString()}</p>
    </div>

    <hr />

    {#each test.substances as substance}
        <div class="flex justify-between">
            <p>{substance.name}</p>
            <div class="flex gap-10">
                <p class={getTextColor(substance)}>{substance.value}</p>
                <p class="faded">{substance.min}-{substance.max}</p>
            </div>
        </div>
    {/each}

    <hr />

    <p>Comment: {test.comment}</p>
</div>
