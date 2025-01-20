<script lang="ts">
    const { data } = $props();
</script>

<h1>Admin page</h1>

<a class="block" href="dashboard/create">Add blood test result</a>

{#each data.tests as { id, lab }}
    <div class="flex gap-10">
        <p>{lab}</p>
        <a href={"dashboard/update?id=" + id}>Update</a>
        <a href={"dashboard/delete?id=" + id}>Delete</a>
    </div>
{/each}
