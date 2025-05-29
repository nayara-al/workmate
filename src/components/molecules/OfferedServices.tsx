'use client';

import { useEffect, useState } from "react";
import { IService } from "@/interface/IService";
import { getServicesByUserId } from "@/service/professionalService";

interface OfferedServicesProps {
  userId: string;
  reloadKey?: number;
}

export default function OfferedServices({ userId, reloadKey }: OfferedServicesProps) {
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      setLoading(true);
      const data = await getServicesByUserId(userId);
      setServices(data);
      setLoading(false);
    }
    if (userId) loadServices();
  }, [userId, reloadKey]);

  return (
    <section className="bg-white border p-6 rounded shadow-md w-full max-w-224 mt-6 relative">
      <h2 className="font-bold text-center text-lg mb-4 text-secondary">SERVIÇOS OFERECIDOS</h2>

      {loading ? (
        <div className="text-center text-gray-500">Carregando serviços...</div>
      ) : services.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum serviço cadastrado.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <span className="font-medium">{service.titulo}</span> — {service.descricao}
              <span className="font-semibold"> (A partir de R$ {service.preco.toFixed(2)})</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
