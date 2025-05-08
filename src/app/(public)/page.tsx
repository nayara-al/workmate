import logo from "../../../public/workmate.svg"
import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-white text-gray-800">
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <Image alt="logomarca" src={logo} width={200}/>
          <p className="font-extrabold text-7xl text-primary">WorkMate</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Conectando Talentos Informais a Oportunidades Reais
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Um aplicativo acessível que facilita a conexão entre trabalhadores informais e empregadores. Rápido, confiável e feito para você.
        </p>
      </section>

      <section className="bg-white py-16 px-6 shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-10">Recursos do Aplicativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cadastro Simples</h3>
            <p>Entre em contato com os administradores para cadastrar seu perfil profissional ou para dar um feedback de serviço contratado.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Busca Inteligente</h3>
            <p>Encontre oportunidades por categoria, localização ou disponibilidade.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Avaliações e Feedbacks</h3>
            <p>Garanta segurança nas contratações com avaliações entre usuários.</p>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Por que usar nosso app?</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-4 text-lg">
          <li>Facilita o acesso a empregos temporários.</li>
          <li>Valoriza a economia informal de forma estruturada.</li>
          <li>Interface intuitiva, mesmo para quem não tem familiaridade com tecnologia.</li>
          <li>Oportunidade para gerar renda de forma segura.</li>
        </ul>
      </section>

      <footer className="text-center text-sm py-8 bg-gray-100 text-gray-500">
        © {new Date().getFullYear()} Aplicativo de Empregos Informais — Todos os direitos reservados.
      </footer>
    </main>
  );
}
