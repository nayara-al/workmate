import CadastroForm from '@/components/organism/CadastroForm'
import Image from 'next/image'
import logo from "@/../public/workmate.svg";

export default function Cadastro() {
  return (
    <div className="flex w-full  h-full">
    <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
      <h2 className="text-2xl font-bold text-secondary mb-6">CADASTRE-SE</h2>
      <CadastroForm />
    </div>
    <div className="w-1/2 flex items-center justify-center bg-custom-pattern bg-secondary">
    <Image src={logo} alt="logomarca"/>
    </div>
  </div>
  )
}
