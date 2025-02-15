import React from "react";

interface ToggleButtonProps {
  values: { name: string; value: string | number }[];
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (value: string | number) => void;
  w?: number;
  h?: number;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  values,
  defaultValue,
  value,
  onChange,
  w = 35,
  h = 25,
}) => {
  return (
    <div className="flex border rounded-md bg-white/20 backdrop-blur-lg shadow-md">
      {values.map((data, i) => {
        const isSelected = value ? data.value === value : data.value === defaultValue;

        return (
          <div
            key={i}
            className={`text-gray-700 flex items-center justify-center cursor-pointer transition-all duration-100
                ${isSelected ? "bg-blue-700 text-white" : "bg-white/30 text-gray-700"}
                active:scale-95`}
            style={{ width: `${w}px`, height: `${h}px` }}
            onClick={() => onChange?.(data.value)}
          >
            {data.name}
          </div>
        );
      })}
    </div>
  );
};

export default ToggleButton;
