'use client'

import { useRouter } from "next/navigation";
import { IProfessional } from "@/interface/IProfessional";
import AtomComponent from "../atoms";
 
  export default function ProfessionalCard({
    id,
    name,
    rating,
    formation,
    experience,
    specialties,
  }: IProfessional) {
    const router = useRouter();
  
    return (
      <div className="bg-primary secondary p-4 rounded shadow-md w-100 h-52 flex justify-between items-center gap-4">
        <div className="flex flex-col items-center gap-4 justify-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl">
            👤
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-secondary text-center">{name}</h3>
            <AtomComponent.RatingStars rating={rating} />
          </div>
        </div>
        <div>
          <div className="bg-white mt-2 p-2 rounded text-sm text-black">
            <p><strong>Formação:</strong> {formation}</p>
            <p><strong>Exp.:</strong> {experience}</p>
            <p className="truncate max-w-[200px]">
              <strong>Espec.:</strong> {specialties.join(", ")}
            </p>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button
              onClick={() => router.push(`/perfil/${id}`)}
              className="text-xs px-2 py-1 bg-white rounded border border-primary text-secondary"
            >
              Ver mais
            </button>
            <button className="text-xs px-2 py-1 bg-secondary text-white rounded">
              Contatar
            </button>
          </div>
        </div>
      </div>
    );
  }
  