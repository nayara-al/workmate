type InputProps = {
    id: string;
    type: string;
    placeholder?: string;
  };
  
  export default function Input({ id, type, placeholder }: InputProps) {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray02 rounded bg-gray02 text-gray01 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }
  