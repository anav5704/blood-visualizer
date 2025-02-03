<script lang="ts">
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

{#each items as item}
    <div class="card animate-pulse">
        <p class="opacity-0">Loading...</p>
        <p class="opacity-0">Loading...</p>
    </div>
{/each}
