<script lang="ts">
    import { page } from "$app/state";
    let { user } = $props();

    const links = [
        {
            label: "Home",
            href: "/",
            active: page.url.pathname == "/",
        },
        {
            label: "Tests",
            href: "/tests",
            active: page.url.pathname.includes("/tests"),
        },
        {
            label: "Substances",
            href: "/substances",
            active: page.url.pathname.includes("/substances"),
        },
        {
            label: user ? "Dashboard" : "Login",
            href: user ? "/dash" : "/login",
            active:
                page.url.pathname.includes("/dash") ||
                page.url.pathname == "/login",
        },
    ];
</script>

<div class="px-6 py-3 rounded-xl bg-zinc-900 flex justify-between items-center">
    <a href="/">Blood Visualizer</a>
    <div class="space-x-7">
        {#each links as { label, href, active }}
            <a
                class={`${active ? "text-white" : "text-zinc-500"} hover:text-white`}
                {href}
            >
                {label}
            </a>
        {/each}
    </div>
</div>
