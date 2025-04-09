"use client";
import React, { useState } from "react";
import filtersData from "@/json/filtersData.json"

export default function Filter() {
    const [estadoSelecionado, setEstadoSelecionado] = useState("SE");
    const [cidadeSelecionada, setCidadeSelecionada] = useState("Aracaju");
  
    const estados = filtersData.estados;
    const cidades = estados.find((estado) => estado.sigla === estadoSelecionado)?.cidades || [];

  return (
    <aside className="w-1/5 bg-white p-6 border-r border-black space-y-6 text-sm">
        <div>
          <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Avaliação dos clientes</h3>
          <div className="flex gap-1 mt-2 text-4xl text-black">{[1, 2, 3, 4, 5].map((i) => <span key={i}>☆</span>)}</div>
        </div>

        <div>
          <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Tempo de experiência</h3>
          <ul className="mt-2 space-y-1 text-black">
            <li>Menos de 2 anos</li>
            <li>De 2 a 5 anos</li>
            <li>Mais de 5 anos</li>
          </ul>
        </div>

        <div>
          <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Classificação</h3>
          <ul className="mt-2 space-y-1 text-black">
          {filtersData.categorias.map((categoria, idx) => (
            <li key={idx} className="text-black">
                {categoria.nome} ({categoria.quantidade})
            </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="bg-primary text-secondary font-bold text-center py-2 rounded">Localização</h3>
          <div className="mt-2">
            <label className="block text-black mb-1">Estado:</label>
            <select
                value={estadoSelecionado}
                onChange={(e) => {
                setEstadoSelecionado(e.target.value);
                setCidadeSelecionada(""); 
                }}
                className="w-full p-2 border rounded text-black"
            >
                {estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                    {estado.nome}
                </option>
                ))}
            </select>
            </div>
            <div className="mt-2">
            <label className="block text-black mb-1">Cidade:</label>
                <select
                    value={cidadeSelecionada}
                    onChange={(e) => setCidadeSelecionada(e.target.value)}
                    className="w-full p-2 border rounded text-black"
                    disabled={!cidades.length}
                >
                    <option value="">Selecione uma cidade</option>
                    {cidades.map((cidade, idx) => (
                    <option key={idx} value={cidade}>
                        {cidade}
                    </option>
                    ))}
                </select>
            </div>
        </div>
      </aside>
  )
}
