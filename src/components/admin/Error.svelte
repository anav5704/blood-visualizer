<script lang="ts">
    import { TriangleAlert } from "lucide-svelte";

    const { message } = $props();
</script>

<div class="error flex items-center gap-3">
    <TriangleAlert size={20} />
    <p>{message}</p>
</div>
