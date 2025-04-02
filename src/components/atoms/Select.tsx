export default function Select({ id, options }: { id: string; options: string[] }) {
    return (
      <select id={id} className="w-full p-2 border border-gray02 rounded bg-gray02 text-gray01">
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  }