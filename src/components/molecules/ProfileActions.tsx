"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface ProfileActionsProps {
  email: string;
  telefone: string;
  portifolio?: string | null;
}

export default function ProfileActions({ email, telefone, portifolio  }: ProfileActionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortifolioOpen, setIsPortifolioOpen] = useState(false);

  const hasPortifolio = !!portifolio && portifolio.trim() !== "";
  return (
    <>
      <section className="flex justify-center items-center gap-4 mt-6">
      {/* 
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded shadow transition-colors">
          💲 Contratar
        </button>
       */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-300 hover:bg-sky-400 text-black font-semibold py-2 px-6 rounded shadow transition-colors cursor-pointer"
        >
          💬 Conversar
        </button>
        <div className="relative group">
          <button
            onClick={() => {
              if (hasPortifolio) setIsPortifolioOpen(true);
            }}
            className={`py-2 px-6 rounded shadow font-semibold transition-colors ${
              hasPortifolio
                ? "bg-gray-300 hover:bg-gray-400 text-black cursor-pointer"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!hasPortifolio}
          >
            📂 Portfólio
          </button>
          {!hasPortifolio && (
            <div className="cursor-not-allowed absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Portfólio não informado
            </div>
          )}
        </div>
      </section>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">📞 Informações de Contato</Dialog.Title>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Telefone:</strong> {telefone}</p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
              >
                Fechar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Dialog open={isPortifolioOpen} onClose={() => setIsPortifolioOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">📂 Portfólio</Dialog.Title>
            {hasPortifolio ? (
              <p>{portifolio}</p>
            ) : (
              <p className="text-gray-500 italic">Nenhum portfólio informado.</p>
            )}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsPortifolioOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                Fechar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
