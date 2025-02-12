export const getTextColor = (status: "GOOD" | "OK" | "BAD") => {
    if (status === "GOOD") {
        return "text-emerald-500";
    }

    if (status === "OK") {
        return "text-amber-500";
    }

    if (status === "BAD") {
        return "text-rose-500";
    }
};
