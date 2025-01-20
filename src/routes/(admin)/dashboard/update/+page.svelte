<script lang="ts">
    import { substanceNames } from "@/const";
    import { enhance } from "$app/forms";
    const { data, form } = $props();

    const formattedDate = new Date(data?.test?.date as Date)
        .toISOString()
        .split("T")[0];
</script>

<h1>Add result</h1>

<form
    method="POST"
    use:enhance={() => {
        return async ({ update }) => {
            update({ reset: false });
        };
    }}
>
    <input type="text" name="id" value={data?.test?.id} hidden />
    <input type="date" name="date" value={formattedDate} required />
    <input type="text" name="lab" value={data.test?.lab} required />
    <input type="text" name="comment" value={data.test?.comment} />

    {#each substanceNames as substanceName}
        {@const existingSubstance = data?.test?.substances.find(
            (substance) => substance.name === substanceName
        )}
        <div class="grid grid-cols-4 gap-5 items-end">
            <p>{substanceName}</p>
            <input type="text" name="name[]" value={substanceName} hidden />
            <input
                type="number"
                name="value[]"
                value={existingSubstance ? existingSubstance.value : ""}
            />
            <input
                type="number"
                name="min[]"
                value={existingSubstance ? existingSubstance.min : ""}
            />
            <input
                type="number"
                name="max[]"
                value={existingSubstance ? existingSubstance.max : ""}
            />
        </div>
    {/each}

    <button>Confirm</button>
</form>

{#if form?.message}
    <p class="error">{form?.message}</p>
{/if}
