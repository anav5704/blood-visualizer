export enum Status {
    "good",
    "ok",
    "bad",
}

export type ValueType = Record<string, { min: number; max: number }>;

export const LabPresets = [
    {
        name: "Oceania Hospital Pathology",
        values: {
            wbc: { min: 4, max: 11 },
            rbc: { min: 4.5, max: 6.5 },
            hgb: { min: 130, max: 180 },
            plt: { min: 150, max: 400 },
            na: { min: 135, max: 149 },
            k: { min: 3.6, max: 5.4 },
            cl: { min: 96, max: 108 },
            urea: { min: 2.5, max: 7 },
            creatine: { min: 62, max: 106 },
            urates: { min: 0.18, max: 0.42 },
            cortisol: { min: 120, max: 620 },
            ft3: { min: 3.1, max: 6.8 },
            ft4: { min: 12, max: 22 },
            tsh: { min: 0.27, max: 4.2 },
            testosterone: { min: 8.64, max: 29 },
        },
    },
    {
        name: "West Mead Hospital Pathology",
        values: {
            wbc: { min: 4.5, max: 13.5 },
            rbc: { min: 4.5, max: 6.5 },
            hgb: { min: 120, max: 175 },
            plt: { min: 150, max: 450 },
            na: { min: 132, max: 145 },
            k: { min: 3.5, max: 5.5 },
            cl: { min: 95, max: 110 },
            urea: { min: 3, max: 7.5 },
            creatine: { min: 60, max: 110 },
            urates: { min: 0.18, max: 0.42 }, // not tested using fallback range
            cortisol: { min: 120, max: 620 }, // not tested using fallback range
            ft3: { min: 2.6, max: 6 },
            ft4: { min: 8, max: 22 },
            tsh: { min: 0.35, max: 6 },
            testosterone: { min: 6, max: 30 },
        },
    },
];

export const Substances = [
    { id: "wbc", name: "White Blood Cells", category: "Blood" },
    { id: "rbc", name: "Red Blood Cells", category: "Blood" },
    { id: "hgb", name: "Hemoglobin", category: "Blood" },
    { id: "plt", name: "Platelets", category: "Blood" },
    { id: "na", name: "Sodium", category: "Electrolyte" },
    { id: "k", name: "Potassium", category: "Electrolyte" },
    { id: "cl", name: "Chloride", category: "Electrolyte" },
    { id: "urea", name: "Urea", category: "Electrolyte" },
    { id: "urates", name: "Urates", category: "Electrolyte" },
    { id: "creatine", name: "Creatinine", category: "Electrolyte" },
    { id: "cortisol", name: "Cortisol", category: "Hormone" },
    { id: "ft3", name: "Free Triiodothyronine (FT3)", category: "Hormone" },
    { id: "ft4", name: "Free Thyroxine (FT4)", category: "Hormone" },
    { id: "tsh", name: "Thyroid-Stimulating Hormone", category: "Hormone" },
    { id: "testosterone", name: "Testosterone", category: "Hormone" },
];
