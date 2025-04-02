import CadastroForm from '@/components/organism/CadastroForm'

export default function Cadastro() {
  return (
    <div className="flex h-full w-full">
    <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
      <h2 className="text-2xl font-bold text-secondary mb-6">CADASTRE-SE</h2>
      <CadastroForm />
    </div>
    <div className="w-1/2 flex items-center justify-center bg-custom-pattern bg-secondary"></div>
  </div>
  )
}
