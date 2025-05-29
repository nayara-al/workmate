import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline"; // Tipos de botão
  className?: string; // Para estilos personalizados
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) {
  const baseStyles = "py-2 px-4 rounded font-medium transition-opacity cursor-pointer";
  const variantStyles = {
    primary: "bg-primary text-white hover:opacity-80 w-full",
    secondary: "bg-secondary text-white hover:opacity-80 w-full",
    outline: "border border-gray01 text-gray01 hover:bg-gray02",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:opacity-50" : "";

  return (
    <button
      className={twMerge(baseStyles, variantStyles[variant], disabledStyles, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
