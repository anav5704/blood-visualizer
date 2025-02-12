<script lang="ts">
    import StatusIndicator from "./StatusIndicator.svelte";
    const { substance } = $props();
</script>

<a
    class="group card flex justify-between items-center"
    href={"/substances/" + substance.id}
>
    <div>
        <p>{substance.name}</p>
        <p class="faded">{substance.category}</p>
    </div>
    <StatusIndicator status={substance.status} />
</a>
