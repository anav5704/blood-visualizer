<script lang="ts">
    import Error from "@/components/Error.svelte";
    import { Substances } from "@/utils/const";
    import { enhance } from "$app/forms";
    const { data, form } = $props();

    const formattedDate = new Date(data?.test?.date as Date)
        .toISOString()
        .split("T")[0];
</script>

<h1>Update Results</h1>

{#if form?.message}
    <Error message={form.message} />
{/if}

<form
    method="POST"
    use:enhance={() => {
        return async ({ update }) => {
            update({ reset: false });
        };
    }}
>
    <input type="text" name="id" value={data?.test?.id} hidden />
    <div class="grid gap-5 grid-cols-2">
        <input
            value={formattedDate}
            placeholder="Date"
            type="date"
            name="date"
            required
        />
        <input
            value={data.test?.lab}
            placeholder="Lab"
            type="text"
            name="lab"
            required
        />
    </div>
    <textarea placeholder="Comment" name="comment" value={data.test?.comment}
    ></textarea>

    {#each Substances as { name }}
        {@const exists = data?.test?.substances.find(
            (substance) => substance.name === name
        )}
        <div class="grid grid-cols-3 gap-5 items-end">
            <input type="text" name="name[]" value={name} hidden />
            <input
                value={exists ? exists.value : ""}
                placeholder={name}
                type="number"
                name="value[]"
            />
            <input
                value={exists ? exists.min : ""}
                placeholder="Min"
                type="number"
                name="min[]"
            />
            <input
                value={exists ? exists.max : ""}
                placeholder="Max"
                type="number"
                name="max[]"
            />
        </div>
    {/each}

    <button>Update Results</button>
</form>
