import LoginForm from "@/components/organism/LoginForm";
import Image from "next/image";
import logo from "@/../public/workmate.svg";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-full">
      <div className="flex h-full w-full bg-primary">
      <div className="w-1/2 flex items-center justify-center bg-custom-pattern">
        <Image src={logo} alt="logomarca"/>
      </div>

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