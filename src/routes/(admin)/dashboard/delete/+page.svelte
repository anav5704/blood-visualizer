<script lang="ts">
    const { data, form } = $props();
</script>

<h1>Delete result</h1>

<form method="POST">
    <p>
        Are you sure you want to delete the blood test result from
        {data.test?.lab} dated {data.test?.date.toDateString()}?
    </p>
    <input type="text" name="id" value={data?.test?.id} hidden />
    <button>Confirm</button>
</form>

{#if form?.message}
    <p class="error">{form?.message}</p>
{/if}
