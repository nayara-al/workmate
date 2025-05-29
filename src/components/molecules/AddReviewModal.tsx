"use client";

import { useEffect, useState } from "react";
import { getServicesByUserId } from "@/service/professionalService";
import { IService } from "@/interface/IService";
import { createReview } from "@/service/usuarioService";

interface AddReviewModalProps {
  usuarioId: string; // id do profissional (prestador)
  onClose: () => void;
  onReviewAdded: () => void;
}

export default function AddReviewModal({
  usuarioId,
  onClose,
  onReviewAdded,
}: AddReviewModalProps) {
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState("");
  const [servicos, setServicos] = useState<IService[]>([]);
  const [servicoSelecionado, setServicoSelecionado] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const result = await getServicesByUserId(usuarioId);
        setServicos(result);
        if (result.length > 0) {
          setServicoSelecionado(result[0].id); // pré-seleciona o primeiro
        }
      } catch (error) {
        console.error("Erro ao buscar serviços do prestador:", error);
      }
    }

    fetchServices();
  }, [usuarioId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!servicoSelecionado) {
      alert("Por favor, selecione um serviço.");
      return;
    }

    setLoading(true);

    const success = await createReview({
      nota,
      comentario,
      servicoId: servicoSelecionado,
    });

    if (success) {
      onReviewAdded();
      onClose();
    } else {
      alert("Erro ao enviar avaliação.");
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-black"
      >
        <h2 className="text-lg font-bold mb-4">Avaliar profissional</h2>

        <label className="block mb-2">Serviço</label>
        <select
          value={servicoSelecionado}
          onChange={(e) => setServicoSelecionado(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
          required
        >
          {servicos.map((servico) => (
            <option key={servico.id} value={servico.id}>
              {servico.titulo}
            </option>
          ))}
        </select>

        <label className="block mb-2">Nota (1 a 5)</label>
        <input
          type="number"
          value={nota}
          onChange={(e) => setNota(Number(e.target.value))}
          min={1}
          max={5}
          className="w-full border px-3 py-2 mb-4 rounded"
          required
        />

        <label className="block mb-2">Comentário</label>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
          required
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:underline"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
