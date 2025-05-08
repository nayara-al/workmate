'use client';

import { useRouter } from 'next/navigation';
import { IProfessional } from '@/interface/IProfessional';
import { Dialog } from "@headlessui/react";
import AtomComponent from '../atoms';
import { useState } from 'react';

export default function ProfessionalCard({
  id,
  nome,
  mediaNota,
  formacao,
  experiencia,
  especializacoes,
  email,
  telefone,
}: IProfessional) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary secondary p-4 rounded shadow-md w-100 h-52 flex justify-between items-center gap-4">
      <div className="flex flex-col items-center gap-4 justify-center">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl">
          👤
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-secondary text-center">{nome}</h3>
          <AtomComponent.RatingStars rating={mediaNota} />
        </div>
      </div>
      <div>
        <div className="bg-white mt-2 p-2 rounded text-sm text-black">
          <p><strong>Formação:</strong> {formacao}</p>
          <p><strong>Exp.:</strong> {experiencia}</p>
          <p className="truncate max-w-[200px]">
            <strong>Espec.:</strong> {especializacoes?.join(', ') ?? 'Sem especializações'}
          </p>
        </div>
        <div className="flex justify-center mt-2 gap-4">
          <button
            onClick={() => router.push(`/perfil/${id}?mediaNota=${mediaNota}`)}

            className="text-xs px-2 py-1 bg-white rounded border border-primary text-secondary cursor-pointer"
          >
            Ver mais
          </button>
          <button className="text-xs px-2 py-1 bg-secondary text-white rounded cursor-pointer" onClick={() => setIsOpen(true)}>
            Contatar
          </button>
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
              <Dialog.Title className="text-lg font-bold mb-4">📞 Informações de Contato</Dialog.Title>
              <p><strong>Telefone:</strong> {telefone}</p>
              <p><strong>Email:</strong> {email}</p>
  
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
      </div>
    </div>
  );
}
