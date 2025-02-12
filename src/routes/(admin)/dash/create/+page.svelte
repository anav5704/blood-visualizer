<script lang="ts">
    import { Substances, LabPresets, type ValueType } from "@/utils/const";
    import Error from "@/components/admin/Error.svelte";
    import { enhance } from "$app/forms";

    let loading = $state(false);
    let lab = $state(LabPresets[0].name);
    let values = $derived<ValueType>(
        LabPresets.find((l) => l.name === lab)?.values || {}
    );

    const { form } = $props();
</script>

<h1>Add Results</h1>

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
    <label>
        Test Date
        <input placeholder="Date" name="date" type="date" required />
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
        <label>
            <div class="flex gap-2">
                <p>{name}</p>
                <p class="faded">
                    {values[id].min}-{values[id].max}
                </p>
            </div>
            <input type="text" name="name[]" value={id} hidden />
            <input placeholder={name} type="string" name="value[]" />
        </label>
    {/each}

    <label>
        Comment
        <textarea placeholder="Comment" name="comment" rows={3}></textarea>
    </label>

    <button disabled={loading}>
        {loading ? "Loading..." : "Add Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
