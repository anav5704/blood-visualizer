<script lang="ts">
    const medication = [
        {
            name: "Desmopressin",
            dosage: "200 t.i.m, 100 q6PM (mcg)",
        },
        {
            name: "Hydrocortisol",
            dosage: "10 qAM, 4 qNoon (mg)",
        },
        {
            name: "Thyroxine",
            dosage: "125 qAM (mcg)",
        },
    ];
</script>

<div class="card space-y-6 p-6">
    <p>Medicine Dosage</p>

    <hr />

    {#each medication as { name, dosage }}
        <div class="flex justify-between">
            <p>{name}</p>
            <p class="faded">{dosage}</p>
        </div>
    {/each}
</div>
