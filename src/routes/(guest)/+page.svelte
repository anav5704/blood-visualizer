<script lang="ts">
    import CountCard from "@/components/guest/CountCard.svelte";
    import TestTable from "@/components/guest/TestTable.svelte";

    const { data } = $props();
</script>

<h1>Overview</h1>

<div class="grid grid-cols-3 gap-5">
    <CountCard label="Total Tests" value={data.count.test} />
    <CountCard label="Total Substances" value={data.count.substance} />
    <CountCard label="Healthy Results" value={data.count.healthy + "%"} />
</div>

<TestTable test={data.test} />
