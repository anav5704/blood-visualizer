<script lang="ts">
    import Navbar from "@/components/shared/Navbar.svelte";
    import "@fontsource-variable/dm-sans";
    import "../app.css";

    let { children, data } = $props();
</script>

<main>
    <Navbar user={data.user} />
    {@render children()}
</main>
