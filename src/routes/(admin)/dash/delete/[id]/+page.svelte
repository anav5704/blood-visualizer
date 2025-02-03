<script lang="ts">
    import Error from "@/components/admin/Error.svelte";
    import { enhance } from "$app/forms";

    let loading = $state(false);

    const { data, form } = $props();
</script>

<h1>Delete Results</h1>

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
    <p>
        Are you sure you want to delete the blood test result from
        {data.test?.lab} dated {data.test?.date.toDateString()}?
    </p>
    <input type="text" name="id" value={data?.test?.id} hidden />

    <button disabled={loading}>
        {loading ? "Loading..." : "Delete Results"}
    </button>

    {#if form?.message}
        <Error message={form.message} />
    {/if}
</form>
