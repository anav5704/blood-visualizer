<script lang="ts">
    import { SquarePen, Trash2 } from "lucide-svelte";

    const { data } = $props();
</script>

<h1>Dashboard</h1>

<div class="flex gap-5">
    <input class="grow" placeholder="Search..." type="search" />
    <a class="card" href="/dash/create">Add Results</a>
</div>

{#each data.tests as test}
    <div class="group card flex justify-between items-center">
        <div>
            <p>{test.lab}</p>
            <p class="text-zinc-500">{test.date.toDateString()}</p>
        </div>
        <div class="flex">
            <a
                class="transition group-hover:opacity-100 opacity-0 p-3"
                href={"/dash/update/" + test.id}
            >
                <SquarePen size={20} />
            </a>
            <a
                class="transition group-hover:opacity-100 opacity-0 p-3"
                href={"/dash/delete/" + test.id}
            >
                <Trash2 size={20} />
            </a>
        </div>
    </div>
{/each}
