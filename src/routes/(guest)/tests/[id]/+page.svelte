<script lang="ts">
    import TestTable from "@/components/guest/TestTable.svelte";
    import { getTextColor } from "@/utils/getTextColor.js";

    const { data } = $props();
</script>

<h1>Test Results / {data.test?.date.toDateString()}</h1>

<TestTable test={data.test} />
