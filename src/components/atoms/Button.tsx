import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline"; // Tipos de botão
  className?: string; // Para estilos personalizados
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  // Definir classes base + variantes
  const baseStyles = "py-2 px-4 rounded font-medium transition-opacity";
  const variantStyles = {
    primary: "bg-primary text-white hover:opacity-80 w-full",
    secondary: "bg-secondary text-white hover:opacity-80 w-full",
    outline: "border border-gray01 text-gray01 hover:bg-gray02",
  };

  return (
    <button
      className={twMerge(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
