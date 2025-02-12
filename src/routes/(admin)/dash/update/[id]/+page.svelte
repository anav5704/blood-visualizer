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

    <label>
        Test Date
        <input
            value={formattedDate}
            placeholder="Date"
            type="date"
            name="date"
            required
        />
    </label>

    <label>
        Lab Preset
        <select name="lab" bind:value={lab}>
            {#each LabPresets as { name }}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </label>

    {#each Substances as { id, name }}
        {@const exists = data?.test?.substances.find(
            (substance) => substance.name == id
        )}
        <label>
            <div class="flex gap-2">
                <p>{name}</p>
                <p class="faded">
                    {values[id].min}-{values[id].max}
                </p>
            </div>
            <input type="text" name="name[]" value={id} hidden />
            <input
                value={exists ? exists.value : ""}
                placeholder={name}
                type="string"
                name="value[]"
            />
        </label>
    {/each}

    <label>
        Comment
        <textarea
            rows={3}
            placeholder="Comment"
            name="comment"
            value={data.test?.comment}
        ></textarea>
    </label>

    <button disabled={loading}>
        {loading ? "Loading..." : "Update Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
