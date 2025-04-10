// src/components/organism/ProfileForm.tsx
"use client";

import { useEffect, useState } from "react";
import MoleculeComponent from "../molecules";
import professionals from "@/json/professional.json";
import { IProfessional } from "@/interface/IProfessional";

interface ProfileFormProps {
  id: string;
}

export default function ProfileForm({ id }: ProfileFormProps) {
  const [professional, setProfessional] = useState<IProfessional | null>(null);

  useEffect(() => {
    setProfessional(professionals.find((prof) => prof.id === id) || null);
  }, [id]);
  

  if (!professional) {
    return (
      <div className="flex justify-center items-center w-full">
        <p>Carregando informações do profissional...</p>
      </div>
    );
  }

  return (
    <main className="flex w-full">
      <MoleculeComponent.ProfileCard {...professional} />
      <div className="flex flex-col justify-start items-center w-full h-full p-8">
        <MoleculeComponent.ReviewSummary />
        <MoleculeComponent.OfferedServices />
        <MoleculeComponent.Gallery />
        <MoleculeComponent.ProfileActions />
      </div>
    </main>
  );
}
