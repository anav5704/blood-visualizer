<script lang="ts">
    import { LabPresets, Substances, type ValueType } from "@/utils/const";
    import Error from "@/components/admin/Error.svelte";
    import { enhance } from "$app/forms";

    const { data, form } = $props();

    let loading = $state(false);
    let lab = $state(data.test?.lab);
    let values = $derived<ValueType>(
        LabPresets.find((l) => l.name === lab)?.values || {}
    );

    const formattedDate = new Date(data?.test?.date as Date)
        .toISOString()
        .split("T")[0];
</script>

<h1>Update Results</h1>

<form
    method="POST"
    use:enhance={() => {
        loading = true;
        return async ({ update }) => {
            update({ reset: false }).finally(async () => {
                loading = false;
            });
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
        <select name="lab" bind:value={lab}>
            {#each LabPresets as { name }}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </div>
    <textarea placeholder="Comment" name="comment" value={data.test?.comment}
    ></textarea>

    {#each Substances as { id, name }}
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
                value={values[id].min}
                placeholder="Min"
                type="number"
                name="min[]"
            />
            <input
                value={values[id].max}
                placeholder="Max"
                type="number"
                name="max[]"
            />
        </div>
    {/each}

    <button disabled={loading}>
        {loading ? "Loading..." : "Update Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
