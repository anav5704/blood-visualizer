<script lang="ts">
    import { SquarePen, Trash2 } from "lucide-svelte";

    const { test } = $props();
</script>

<div class="group card flex justify-between items-center">
    <div>
        <p>{test.lab}</p>
        <p class="faded">{test.date.toDateString()}</p>
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
