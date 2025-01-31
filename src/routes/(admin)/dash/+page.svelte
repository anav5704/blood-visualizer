<script lang="ts">
    import TestCard from "@/components/admin/TestCard.svelte";
    import { SquarePen, Trash2 } from "lucide-svelte";

    const { data } = $props();
</script>

<h1>Dashboard</h1>

<div class="flex gap-5">
    <input class="grow" placeholder="Search..." type="search" />
    <a class="card" href="/dash/create">Add Results</a>
</div>

{#each data.tests as test}
    <TestCard {test} />
{/each}
