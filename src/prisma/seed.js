import { PrismaClient, SubstanceName } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const testData = Array.from({ length: 10 }).map((_, index) => ({
        date: new Date(),
        lab: `Lab ${index + 1}`,
        comment: `Comment for test ${index + 1}`,
        substances: {
            create: [
                {
                    name: SubstanceName.RED_BLOOD_CELLS,
                    value: Math.random() * 10,
                    min: 4.5,
                    max: 5.5,
                },
                {
                    name: SubstanceName.WHITE_BLOOD_CELLS,
                    value: Math.random() * 10,
                    min: 4.0,
                    max: 11.0,
                },
                {
                    name: SubstanceName.HEMOGLOBIN,
                    value: Math.random() * 10,
                    min: 13.5,
                    max: 17.5,
                },
                {
                    name: SubstanceName.SODIUM,
                    value: Math.random() * 10,
                    min: 135,
                    max: 145,
                },
                {
                    name: SubstanceName.POTASSIUM,
                    value: Math.random() * 10,
                    min: 3.5,
                    max: 5.0,
                },
            ],
        },
    }));

    for (const test of testData) {
        await prisma.test.create({
            data: test,
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });