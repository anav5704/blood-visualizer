<script lang="ts">
    import Error from "@/components/Error.svelte";
    import { substanceNames } from "@/utils/const";
    import { enhance } from "$app/forms";
    const { form } = $props();
</script>

<h1>Add Results</h1>

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
    <div class="grid gap-5 grid-cols-2">
        <input placeholder="Date" name="date" type="date" required />
        <input placeholder="Lab" type="text" name="lab" required />
    </div>
    <textarea placeholder="Comment" name="comment" rows={3}></textarea>

    {#each substanceNames as substanceName}
        <div class="grid grid-cols-3 gap-5 items-center">
            <input type="text" name="name[]" value={substanceName} hidden />
            <input placeholder={substanceName} type="number" name="value[]" />
            <input placeholder="Min" type="number" name="min[]" />
            <input placeholder="Max" type="number" name="max[]" />
        </div>
    {/each}

    <button>Add Results</button>
</form>
