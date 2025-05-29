type TextBoxProps = {
    id: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
  
  export default function TextBox({ id, value, placeholder, onChange }: TextBoxProps) {
    return (
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 border border-gray02 rounded bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-y min-h-[120px]"
      />
    );
  }
  