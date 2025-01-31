<script lang="ts">
    import StatusIndicator from "./StatusIndicator.svelte";

    const { test } = $props();
</script>

<a
    class="group card flex justify-between items-center"
    href={"/tests/" + test.id}
>
    <div>
        <p>{test.lab}</p>
        <p class="text-zinc-500">{test.date.toDateString()}</p>
    </div>
    <StatusIndicator status={test.status} />
</a>
