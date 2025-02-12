import { LabPresets } from "./const";

interface Props {
    lab: string;
    name: string;
    value: number;
}

export const getSingularStatus = ({ lab, name, value }: Props) => {
    const preset = LabPresets.find((preset) => preset.name == lab);

    // @ts-ignore
    const min = preset?.values[name].min;
    // @ts-ignore
    const max = preset?.values[name].max;

    const mid = (max + min) / 2;
    const range = max - min;
    const deviation = Math.abs(value - mid) / (range / 2);

    if (value < min || value > max) {
        return "BAD";
    }

    if (deviation > 0.7) {
        return "OK";
    } else {
        return "GOOD";
    }
};
