import React from "react";
interface ToggleButtonProps {
    values: {
        name: string;
        value: string | number;
    }[];
    defaultValue?: string | number;
    value?: string | number;
    onChange?: (value: string | number) => void;
    w?: number;
    h?: number;
}
declare const ToggleButton: React.FC<ToggleButtonProps>;
export default ToggleButton;
