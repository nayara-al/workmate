type LabelProps = {
    htmlFor: string;
    children: React.ReactNode;
  };
  
  export default function Label({ htmlFor, children }: LabelProps) {
    return (
      <label htmlFor={htmlFor} className="block text-gray01 mb-1">
        {children}
      </label>
    );
  }
  