<script lang="ts">
    import StatusIndicator from "./StatusIndicator.svelte";
    const { substance } = $props();
</script>

<a
    class="group card flex justify-between items-center"
    href={"/substances/" + substance.name.split(" ").join("-")}
>
    <div>
        <p>{substance.name}</p>
        <p class="text-zinc-500">{substance.category}</p>
    </div>
    <StatusIndicator status={substance.status} />
</a>
