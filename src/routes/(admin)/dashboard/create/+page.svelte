<script lang="ts">
    import { substanceNames } from "@/const";
    import { enhance } from "$app/forms";
    const { form } = $props();
</script>

<h1>Add result</h1>

<form
    method="POST"
    use:enhance={() => {
        return async ({ update }) => {
            update({ reset: false });
        };
    }}
>
    <input type="date" name="date" required />
    <input type="text" name="lab" required />
    <input type="text" name="comment" />

    {#each substanceNames as substanceName}
        <div class="grid grid-cols-4 gap-5 items-end">
            <p>{substanceName}</p>
            <input type="text" name="name[]" value={substanceName} hidden />
            <input type="number" name="value[]" />
            <input type="number" name="min[]" />
            <input type="number" name="max[]" />
        </div>
    {/each}

    <button>Confirm</button>
</form>

{#if form?.message}
    <p class={form?.success ? "success" : "error"}>{form?.message}</p>
{/if}
