<script lang="ts">
    import Error from "@/components/admin/Error.svelte";
    import { Substances } from "@/utils/const";
    import { enhance } from "$app/forms";

    let loading = $state(false);

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
        <input placeholder="Lab" type="text" name="lab" required />
    </div>
    <textarea placeholder="Comment" name="comment" rows={3}></textarea>

    {#each Substances as { name }}
        <div class="grid grid-cols-3 gap-5 items-center">
            <input type="text" name="name[]" value={name} hidden />
            <input placeholder={name} type="number" name="value[]" />
            <input placeholder="Min" type="number" name="min[]" />
            <input placeholder="Max" type="number" name="max[]" />
        </div>
    {/each}

    <button disabled={loading}>
        {loading ? "Loading..." : "Add Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
