<script lang="ts">
    import Error from "@/components/Error.svelte";

    const { data, form } = $props();
</script>

<h1>Delete Results</h1>

{#if form?.message}
    <Error message={form.message} />
{/if}

<form method="POST">
    <p>
        Are you sure you want to delete the blood test result from
        {data.test?.lab} dated {data.test?.date.toDateString()}?
    </p>
    <input type="text" name="id" value={data?.test?.id} hidden />
    <button>Delete Results</button>
</form>
