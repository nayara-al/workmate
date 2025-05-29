"use client";

import { useEffect, useState } from "react";
import MoleculeComponent from "../molecules";
import { fetchUsuarioById } from "@/service/professionalService";
import { IProfessional } from "@/interface/IProfessional";
import { useSearchParams } from "next/navigation";
import AtomComponent from "../atoms";

interface ProfileFormProps {
  id: string;
}

export default function ProfileForm({ id }: ProfileFormProps) {
  const [professional, setProfessional] = useState<IProfessional | null>(null);
  const searchParams = useSearchParams();
  const mediaNota = Number(searchParams.get("mediaNota") || 0);

  useEffect(() => {
    async function loadData() {
      const prof = await fetchUsuarioById(id);
      setProfessional(prof);
    }

    loadData();
  }, [id]);

  if (!professional) {
    return (
      <div className="flex justify-center items-center w-full h-96">
        <AtomComponent.LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="flex w-full">
      <MoleculeComponent.ProfileCard
        name={professional.nome}
        city={professional.cidade}
        state={professional.estado}
        availability={professional.disponibilidade}
        formation={professional.formacao}
        experience={professional.experiencia}
        rating={mediaNota}
        certifications={[]} 
        specialties={[]} 
      />
      <div className="flex flex-col justify-start items-center w-full h-full p-8">
        <MoleculeComponent.ReviewSummary />
        <MoleculeComponent.OfferedServices userId={id} />
        <MoleculeComponent.Gallery />
        <MoleculeComponent.ProfileActions
          email={professional.email}
          telefone={professional.telefone}
          portifolio={professional.portifolio}
        />
      </div>
    </main>
  );
}
