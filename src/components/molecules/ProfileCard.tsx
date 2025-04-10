"use client";
import Image from "next/image";
import ProfessionalImage from "@/img/profissional-avatar.png";

interface ProfileCardProps {
  name: string;
  rating: number;
  city: string;
  state: string;
  availability: string;
  formation: string;
  experience: string;
  certifications: string[];
  specialties: string[];
}

export default function ProfileCard({
  name,
  rating,
  city,
  state,
  availability,
  formation,
  experience,
  certifications,
  specialties,
}: ProfileCardProps) {
  const roundedRating = Math.round(rating);

  return (
    <aside className="bg-secondary text-primary w-80 h-[calc(100vh-4rem)] flex flex-col shadow-md">
      {/* Parte de cima */}
      <section className="h-1/2 flex flex-col justify-center items-center text-center px-4 py-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <Image
          src={ProfessionalImage}
          alt={`Foto do profissional ${name}`}
          width={120}
          height={120}
          className="rounded-full border-4 border-white mb-3"
        />

        <div className="flex text-2xl text-star mb-3">
          {"★★★★★".split("").map((_, i) => (
            <span key={i}>{i < roundedRating ? "★" : "☆"}</span>
          ))}
          <span className="text-white ml-2">{rating.toFixed(1)}</span>
        </div>

        <div className="text-sm text-white">
          <p>📍 {city} - {state}</p>
          <p>📆 {availability}</p>
        </div>
      </section>

      {/* Parte de baixo */}
      <div className="h-1/2 bg-primary text-black rounded-t-lg px-4 py-3 text-xs overflow-y-auto">
        <h3 className="text-sm font-bold mb-2">INFORMAÇÕES PROFISSIONAIS</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Formação:</strong> {formation}</li>
          <li><strong>Experiência:</strong> {experience}</li>
          {certifications.length > 0 && (
            <li><strong>Certificações:</strong> {certifications.join(", ")}</li>
          )}
          {specialties.length > 0 && (
            <li className="line-clamp-2">
              <strong>Especializações:</strong> {specialties.join(", ")}
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
}
