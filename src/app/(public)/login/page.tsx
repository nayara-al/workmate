import LoginForm from "@/components/organism/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="flex h-screen w-full bg-primary">
      {/* Seção da imagem */}
      <div className="w-1/2 flex items-center justify-center bg-custom-pattern">
        workmate
      </div>

      {/* Seção do formulário */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-2xl font-bold text-secondary mb-6">
          BEM-VINDO AO WORKMATE
        </h2>
        <LoginForm />
        </div>
      </div>
    </div>
  );
}