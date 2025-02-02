<script lang="ts">
    const { label, value } = $props();
</script>

<div class="card">
    <p class="faded">{label}</p>
    <p class="font-semibold text-3xl text-right">{value}</p>
</div>
