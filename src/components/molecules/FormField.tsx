import AtomComponent from "../atoms";

type SelectOption = { value: string; label: string };

export default function FormField({
  label,
  id,
  type,
  placeholder,
  options,
  value,
  onChange
}: {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  options?: SelectOption[]; 
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <div className="mb-4">
      <AtomComponent.Label htmlFor={id}>{label}</AtomComponent.Label>
      {type ? (
        <AtomComponent.Input
          id={id}
          type={type}
          placeholder={placeholder!}
          value={value}
          onChange={onChange}
        />
      ) : (
        <AtomComponent.Select
          id={id}
          options={options!}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
        />
      )}
    </div>
  );
}
