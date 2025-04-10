'use client';

export default function OfferedServices() {
  return (
    <section className="bg-white border p-6 rounded shadow-md w-full max-w-224 mt-6">
      <h2 className="font-bold text-center text-lg mb-4 text-secondary">SERVIÇOS OFERECIDOS</h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>
          Instalação elétrica residencial e comercial — Padrão novo, fiação, quadros de distribuição. 
          <span className="font-semibold"> (A partir de R$ 250,00)</span>
        </li>
        <li>
          Troca e manutenção de disjuntores — Identificação e substituição de disjuntores defeituosos.
          <span className="font-semibold"> (A partir de R$ 100,00)</span>
        </li>
        <li>
          Instalação de luminárias e ventiladores de teto — Instalação segura e rápida.
          <span className="font-semibold"> (A partir de R$ 80,00)</span>
        </li>
        <li>
          Automação residencial — Configuração de lâmpadas inteligentes e automação de circuitos elétricos.
          <span className="italic"> (Orçamento sob consulta)</span>
        </li>
        <li>
          Manutenção elétrica preventiva e corretiva — Identificação de curtos-circuitos e reparos.
          <span className="italic"> (Orçamento sob consulta)</span>
        </li>
      </ul>
    </section>
  );
}
