'use client';

import { useEffect, useState } from "react";
import MoleculeComponent from "@/components/molecules";
import { fetchSubcategorias } from "@/service/catogoryService";
import { ISubcategoria } from "@/interface/ICategoria";

export default function CatalogForm() {
  const [agrupado, setAgrupado] = useState<Record<string, ISubcategoria[]>>({});

  useEffect(() => {
    fetchSubcategorias().then((subcategorias) => {
      const agrupadoTemp: Record<string, ISubcategoria[]> = {};
      subcategorias.forEach((sub) => {
        if (!agrupadoTemp[sub.categoriaNome]) {
          agrupadoTemp[sub.categoriaNome] = [];
        }
        agrupadoTemp[sub.categoriaNome].push(sub);
      });
      setAgrupado(agrupadoTemp);
    });
  }, []);

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
