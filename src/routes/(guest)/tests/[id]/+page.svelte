<script lang="ts">
    import TableLoader from "@/components/guest/TableLoader.svelte";
    import TestTable from "@/components/guest/TestTable.svelte";

    const { data } = $props();
</script>

{#await data.stream}
    <h1>Test Results</h1>
    <TableLoader />
{:then stream}
    <h1>Test Results / {stream.test?.date.toDateString()}</h1>
    <TestTable test={stream.test} />
{/await}
