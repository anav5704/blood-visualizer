<script lang="ts">
    import { Status } from "@/utils/const/status";

    const { status } = $props();

    let background = $state("");

    if (status === Status.good) {
        background = "bg-emerald-500";
    }

    if (status === Status.ok) {
        background = "bg-amber-500";
    }

    if (status === Status.bad) {
        background = "bg-rose-500";
    }
</script>

<div>
    <div class={`${background} rounded-full h-5 w-5`}></div>
</div>
