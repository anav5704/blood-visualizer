<script lang="ts">
    const { status } = $props();

    let background = $state("");

    if (status === "GOOD") {
        background = "bg-emerald-500";
    }

    if (status === "OK") {
        background = "bg-amber-500";
    }

    if (status === "BAD") {
        background = "bg-rose-500";
    }
</script>

<div>
    <div class={`${background} rounded-full h-5 w-5`}></div>
</div>
