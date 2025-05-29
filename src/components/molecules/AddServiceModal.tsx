'use client';

import { useState, useEffect } from 'react';
import { ISubcategoria } from '@/interface/ICategoria';
import { createService } from '@/service/professionalService';
import { IServiceRequest } from '@/interface/IService';
import { fetchSubcategorias } from '@/service/filterService';
import { getUserFromCookie } from '@/hooks/useAuth';
import AtomComponent from '../atoms';

interface AddServiceModalProps {
  onServiceAdded: () => void;
  onClose: () => void;
}

export default function AddServiceModal({ onServiceAdded, onClose }: AddServiceModalProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState<number>(0);
  const [subcategoriaId, setSubcategoriaId] = useState('');
  const [subcategorias, setSubcategorias] = useState<ISubcategoria[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSubcategorias() {
      const data = await fetchSubcategorias();
      setSubcategorias(data);
    }
    loadSubcategorias();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const user = getUserFromCookie();

    const payload: IServiceRequest = {
      titulo,
      descricao,
      preco,
      subcategoriaId,
      prestadorId: user?.usuarioId || '',
    };

    const success = await createService(payload);
    if (success) {
      onServiceAdded();
      onClose();
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative text-black">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          ✕
        </button>
        <h3 className="text-lg font-semibold mb-4 text-secondary">Cadastrar Novo Serviço</h3>

        {loading ? (
          <AtomComponent.LoadingSpinner />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(parseFloat(e.target.value))}
              className="w-full p-2 border rounded"
              required
              min={0}
            />
            <select
              value={subcategoriaId}
              onChange={(e) => setSubcategoriaId(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Selecione uma subcategoria</option>
              {subcategorias.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.nome} ({sub.categoriaNome})
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark"
            >
              Cadastrar Serviço
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
