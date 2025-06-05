export function validarSenha(senha: string): string | null {
  const minLength = /.{8,}/;
  const hasUpper = /[A-Z]/;
  const hasLower = /[a-z]/;
  const hasNumber = /\d/;
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;

  if (!minLength.test(senha)) return "A senha deve ter no mínimo 8 caracteres.";
  if (!hasUpper.test(senha)) return "A senha deve conter pelo menos uma letra maiúscula.";
  if (!hasLower.test(senha)) return "A senha deve conter pelo menos uma letra minúscula.";
  if (!hasNumber.test(senha)) return "A senha deve conter pelo menos um número.";
  if (!hasSpecial.test(senha)) return "A senha deve conter pelo menos um caractere especial.";

  return null;
}

export const rules = [
  { label: "Mínimo de 8 caracteres", test: (pw: string) => /.{8,}/.test(pw) },
  { label: "Uma letra maiúscula", test: (pw: string) => /[A-Z]/.test(pw) },
  { label: "Uma letra minúscula", test: (pw: string) => /[a-z]/.test(pw) },
  { label: "Um número", test: (pw: string) => /\d/.test(pw) },
  { label: "Um caractere especial", test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw) },
];
