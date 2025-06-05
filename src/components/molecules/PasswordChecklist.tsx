import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

type Props = {
  password: string;
};

const rules = [
  { label: "Mínimo de 8 caracteres", test: (pw: string) => /.{8,}/.test(pw) },
  { label: "Uma letra maiúscula", test: (pw: string) => /[A-Z]/.test(pw) },
  { label: "Uma letra minúscula", test: (pw: string) => /[a-z]/.test(pw) },
  { label: "Um número", test: (pw: string) => /\d/.test(pw) },
  { label: "Um caractere especial", test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw) },
];

export default function PasswordChecklist({ password }: Props) {
  return (
    <ul className="mt-2 space-y-2 text-sm">
      {rules.map((rule, index) => {
        const passed = rule.test(password);
        return (
          <li
            key={index}
            className={`flex items-center gap-2 transition-colors duration-300 ${
              passed ? "text-green-600" : "text-gray-500"
            }`}
          >
            <span
              className={`transition-all duration-300 transform ${
                passed ? "scale-110 text-green-600" : "scale-100 text-gray-400"
              }`}
            >
              {passed ? (
                <CheckCircleIcon fontSize="small" />
              ) : (
                <CancelIcon fontSize="small" />
              )}
            </span>
            {rule.label}
          </li>
        );
      })}
    </ul>
  );
}