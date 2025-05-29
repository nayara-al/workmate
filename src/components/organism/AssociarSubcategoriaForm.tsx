'use client';

import { useEffect, useState } from 'react';
import { ISubcategoria } from '@/interface/ICategoria';
import { fetchSubcategorias } from '@/service/filterService';
import { getUserFromCookie } from '@/hooks/useAuth';
import { associarSubcategorias } from '@/service/usuarioService';

export default function AssociarSubcategoriasForm() {
  const [subcategorias, setSubcategorias] = useState<ISubcategoria[]>([]);
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      const lista = await fetchSubcategorias();
      setSubcategorias(lista);
      setCarregando(false);
    }
    carregar();
  }, []);

  const handleToggle = (id: string) => {
    setSelecionadas(prev =>
      prev.includes(id)
        ? prev.filter(sid => sid !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    const user = getUserFromCookie();
    if (!user?.usuarioId) return alert('Usuário inválido.');

    const sucesso = await associarSubcategorias(user.usuarioId, selecionadas);
    if (sucesso) {
      window.location.href = '/meu-perfil';
    } else {
      alert('Erro ao associar subcategorias.');
    }
  };

  if (carregando) return <p>Carregando...</p>;

  return (
    <div className="p-4 w-xl mx-auto bg-secondary h-full rounded-2xl">
      <h1 className="text-xl font-bold mb-4">Escolha suas subcategorias</h1>
      <ul className="space-y-2 mb-4">
        {subcategorias.map((sub) => (
          <li key={sub.id}>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selecionadas.includes(sub.id)}
                onChange={() => handleToggle(sub.id)}
              />
              <span>{sub.nome} ({sub.categoriaNome})</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar e continuar
      </button>
    </div>
  );
}
