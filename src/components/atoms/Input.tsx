import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full p-2 border border-gray02 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary ${props.className ?? ''}`}
    />
  );
}
