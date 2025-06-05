import React from "react";

type SelectOption = { value: string; label: string };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export default function Select({ options, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={`w-full p-2 border border-gray-300 rounded text-black ${props.className ?? ''}`}
    >
      <option value="" disabled>Selecione...</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  );
}
