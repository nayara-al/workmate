'use client';

import { useEffect, useState } from "react";
import MoleculeComponent from "@/components/molecules";
import { fetchSubcategorias } from "@/service/catogoryService";
import AtomComponent from "../atoms";

export default function CatalogForm() {
  const [agrupado, setAgrupado] = useState<Record<string, { id: number; nome: string }[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubcategorias().then((subcategorias) => {
      const agrupadoTemp: Record<string, { id: number; nome: string }[]> = {};

      subcategorias.forEach((sub) => {
        const idNumerico = parseInt(sub.id); // 👈 conversão do ID

        if (!agrupadoTemp[sub.categoriaNome]) {
          agrupadoTemp[sub.categoriaNome] = [];
        }

        agrupadoTemp[sub.categoriaNome].push({
          id: idNumerico,
          nome: sub.nome,
        });
      });

      setAgrupado(agrupadoTemp);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-[calc(100vh-4rem)]">
        <AtomComponent.LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {Object.entries(agrupado).map(([categoriaNome, subcategorias]) => (
        <MoleculeComponent.CategoryCard
          key={categoriaNome}
          title={categoriaNome}
          services={subcategorias}
        />
      ))}
    </>
  );
}
