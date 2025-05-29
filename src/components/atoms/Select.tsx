type SelectOption = { value: string; label: string };

interface SelectProps {
  id: string;
  options: SelectOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export default function Select({ id, options, value, onChange, disabled = false }: SelectProps) {
  return (
    <div className="mb-4 text-black">
      <select
        id={id}
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="" disabled>Selecione...</option>
        {options.map(({ value: val, label }) => (
          <option key={val} value={val}>{label}</option>
        ))}
      </select>
    </div>
  );
}
