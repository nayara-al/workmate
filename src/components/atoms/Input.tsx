import React from 'react';

type InputProps = {
  id: string;
  type: string;
  placeholder?: string;
  value?: string; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

export default function Input({ id, type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray02 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}
