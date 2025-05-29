'use client';

import { useRouter } from 'next/navigation';

interface Props {
  label: string;
  subcategoriaNome: string;
}

export default function ServiceButton({ label, subcategoriaNome }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pesquisa?subcategoriaNome=${subcategoriaNome}`);
  };

  return (
    <button
      className="w-full bg-secondary text-white text-sm py-2 px-4 rounded hover:opacity-90 hover:cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
