import AtomComponent from "../atoms";

export default function FormField({ label, id, type, placeholder, options }: { label: string; id: string; type?: string; placeholder?: string; options?: string[] }) {
  return (
    <div className="mb-4">
      <AtomComponent.Label htmlFor={id}>{label}</AtomComponent.Label>
      {type ? <AtomComponent.Input id={id} type={type} placeholder={placeholder!} /> : <AtomComponent.Select id={id} options={options!} />}
    </div>
  );
}