# Blood Visualizer 📈

This is a web application I made to visualize all my blood tests. Since I get my bloods done regularly, I wanted a nice UI to see the results and trends. The main pages are the `test/[id]` page which shows the results of a blood test with colored status indicators, and the `substances/[name]` page which shows how a substance has changed overtime using an area chart.

## Tech Stack

- SvelteKit 5
- TailwindCSS
- LayerCharts
- Prisma ORM
- Neon PostgreSQL

## Getting Started

First fork and clone the repo. Then, run `pnpm install` to download all the dependencies. Now, set up your environmental variables. Make a `.env` file in the root of your project with the following variables:

```sh
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/database
PASSWORD=secure-password
```

The `PASSWORD` variable will hold your actual password, which you will have to enter in the login page. Once you have added your variables, run `pnpm dev` to view it on [localhost:5173](http://localhost:5173).

If you want to add or remove substances from blood test results, modify the `src/utils/const/index.ts` file:

```ts

export const Substances = [
    // Add or remove substances from here.
    {
        id: "wbc",
        name: "White Blood Cells",
        category: "Blood",
    },
]

export const LabPresets = [
    {
        name: "Lab name",
        values: {
            // Update range for new substance for all labs
            wbc: { 
                min: 4,
                max: 11
            },
        },
    },
]
```

## Learning Resources

- [SvelteKit 5 lazy load data](https://svelte.dev/docs/svelte/await)
- [SvelteKit 5 docs](https://svelte.dev)
- [LayerChart docs](https://www.layerchart.com)
