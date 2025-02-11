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
    <div class="grid gap-5 grid-cols-2">
        <input placeholder="Date" name="date" type="date" required />
        <select name="lab" bind:value={lab}>
            {#each LabPresets as { name }}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </div>
    <textarea placeholder="Comment" name="comment" rows={3}></textarea>

    {#each Substances as { id, name }}
        <div class="grid grid-cols-3 gap-5 items-center">
            <input type="text" name="name[]" value={name} hidden />
            <input placeholder={name} type="string" name="value[]" />
            <input type="string" name="min[]" value={values[id].min} />
            <input type="string" name="max[]" value={values[id].max} />
        </div>
    {/each}

    <button disabled={loading}>
        {loading ? "Loading..." : "Add Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
