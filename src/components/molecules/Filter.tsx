'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import filtersData from "@/json/filtersData.json";
import { fetchSubcategorias } from "@/service/filterService";
import { ISubcategoria } from "@/interface/ICategoria";
import ClearIcon from "@mui/icons-material/Clear";

export default function Filter() {
  const router = useRouter();

  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  /* const [notaMinima, setNotaMinima] = useState(""); */
  const [subcategoriaNome, setSubcategoriaNome] = useState("");
  const [subcategorias, setSubcategorias] = useState<ISubcategoria[]>([]);
  const [nomeProfissional, setNomeProfissional] = useState("");

  const estados = filtersData.estados;
  const cidades = estados.find((estado) => estado.sigla === estadoSelecionado)?.cidades || [];

  useEffect(() => {
    async function carregarSubcategorias() {
      const subcategoriasDaApi = await fetchSubcategorias();
      setSubcategorias(subcategoriasDaApi);
    }
  
    carregarSubcategorias();
  }, []);

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault(); 

    const searchParams = new URLSearchParams();
  
    if (cidadeSelecionada && cidadeSelecionada !== "") {
      searchParams.set("localizacao", cidadeSelecionada);
    } else if (estadoSelecionado && estadoSelecionado !== "") {
      searchParams.set("localizacao", estadoSelecionado); 
    }
  
    if (subcategoriaNome && subcategoriaNome !== "") {
      searchParams.set("subcategoriaNome", subcategoriaNome);
    }

    if (nomeProfissional.trim()) {
      searchParams.set("nome", nomeProfissional.trim());
    }
  
    /* if (notaMinima && notaMinima !== "") {
      searchParams.set("notaMinima", notaMinima);
    } */
  
    router.push(`?${searchParams.toString()}`);
  };
  

  return (
    <form className="w-1/5 bg-white p-6 border-r border-black space-y-6 text-sm" onSubmit={handleBuscar}>
      {/* <div>
        <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Avaliação dos clientes</h3>
        <select value={notaMinima} onChange={(e) => setNotaMinima(e.target.value)} className="w-full mt-2 border rounded p-2 text-black">
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n} estrelas ou mais</option>
          ))}
        </select>
      </div> */}
       <div>
        <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">
          Nome do Profissional
        </h3>
        <input
          type="text"
          placeholder="Ex: Ana Silva"
          value={nomeProfissional}
          onChange={(e) => setNomeProfissional(e.target.value)}
          className="w-full mt-2 border rounded p-2 text-black"
        />
      </div>

      <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Classificação</h3>
      <select
        value={subcategoriaNome}
        onChange={(e) => setSubcategoriaNome(e.target.value)}
        className="w-full mt-2 border rounded p-2 text-black"
      >
        <option value="">Selecione uma subcategoria</option>
        {subcategorias.map((sub) => (
          <option key={sub.id} value={sub.nome}>
            {sub.nome}
          </option>
        ))}
      </select>

      <div>
        <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Localização</h3>
        
        <label className="block text-black mb-1">Estado:</label>
        <select
          value={estadoSelecionado}
          onChange={(e) => {
            setEstadoSelecionado(e.target.value);
            setCidadeSelecionada("");  // Resetar cidade quando o estado mudar
          }}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">Selecione um estado</option>  {/* Nova opção "Selecione um estado" */}
          {estados.map((estado) => (
            <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>
          ))}
        </select>

        <label className="block text-black mt-2 mb-1">Cidade:</label>
        <select
          value={cidadeSelecionada}
          onChange={(e) => setCidadeSelecionada(e.target.value)}
          className="w-full p-2 border rounded text-black"
          disabled={!cidades.length}
        >
          <option value="">Selecione uma cidade</option>  {/* Nova opção "Selecione uma cidade" */}
          {cidades.map((cidade, idx) => (
            <option key={idx} value={cidade}>{cidade}</option>
          ))}
        </select>
      </div>

      <button
        className="w-full bg-secondary text-primary font-bold py-2 rounded hover:opacity-90"
        type="submit"
      >
        Buscar
      </button>
      <button
        type="button"
        onClick={() => {
          setEstadoSelecionado("");
          setCidadeSelecionada("");
          setNomeProfissional("");
          router.push("/pesquisa");
        }}
        className="w-full flex items-center justify-center gap-2 mt-2 bg-gray-300 text-black font-medium py-2 rounded hover:bg-gray-400"
      >
        <ClearIcon fontSize="small" />
        Limpar filtros
      </button>
    </form>
  );
}
