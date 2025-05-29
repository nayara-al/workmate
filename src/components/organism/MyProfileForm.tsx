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

  useEffect(() => {
    async function loadUserData() {
      if (!user) return;

      const data = await fetchUsuarioById(user.usuarioId.toString());
      setUserData(data);
      setLoading(false);
    }

    loadUserData();
  }, [user]);

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
      <MoleculeComponent.OfferedServices userId={user.usuarioId.toString()} />
      <MoleculeComponent.Gallery />
      <MoleculeComponent.ProfileActions
        email={userData.email}
        telefone={userData.telefone}
        portifolio={userData.portifolio}
      />
    </div>
  );
}
