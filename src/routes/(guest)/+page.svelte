<script lang="ts">
    import CardLoader from "@/components/guest/CardLoader.svelte";
    import CountCard from "@/components/guest/CountCard.svelte";
    import MedicineDosage from "@/components/guest/MedicineDosage.svelte";
    import TableLoader from "@/components/guest/TableLoader.svelte";
    import TestTable from "@/components/guest/TestTable.svelte";

    const { data } = $props();
</script>

<h1>Overview</h1>

{#await data.stream}
    <CardLoader />
    <MedicineDosage />
    <TableLoader />
{:then stream}
    <div class="grid grid-cols-3 gap-5">
        <CountCard label="Total Tests" value={stream.testCount} />
        <CountCard label="Total Substances" value={stream.substanceCount} />
        <CountCard label="Healthy Results" value={stream.healthyCount + "%"} />
    </div>

    <MedicineDosage />

    <TestTable test={stream.test} />
{/await}
