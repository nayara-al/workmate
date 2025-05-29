/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import MoleculeComponent from "@/components/molecules";
import { fetchUsuarioById } from "@/service/professionalService";
import { IProfessional } from "@/interface/IProfessional";
import AtomComponent from "../atoms";

interface MyProfileFormProps {
  user: { usuarioId: number }; // adapte conforme estrutura real
}

export default function MyProfileForm({ user }: MyProfileFormProps) {
  const [userData, setUserData] = useState<IProfessional | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const userId = user?.usuarioId.toString() || "";

  useEffect(() => {
    loadUserData();
  }, [userId]);

  async function loadUserData() {
    if (!userId) return;

    const data = await fetchUsuarioById(userId);
    setUserData(data);
    setLoading(false);
  }

  if (loading || !userData) {
    return (
      <main className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <AtomComponent.LoadingSpinner />
      </main>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full flex-1 p-8">
      <MoleculeComponent.ReviewSummary />

      <MoleculeComponent.OfferedServices userId={userId} reloadKey={reloadKey} />

      <div className="text-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Cadastrar novo serviço
        </button>
      </div>

      {showModal && (
        <MoleculeComponent.AddServiceModal
          onServiceAdded={() => setReloadKey((prev) => prev + 1)}
          onClose={() => setShowModal(false)}
        />
      )}

      <MoleculeComponent.Gallery />

      <MoleculeComponent.ProfileActions
        email={userData.email}
        telefone={userData.telefone}
        portifolio={userData.portifolio}
      />
    </div>
  );
}
