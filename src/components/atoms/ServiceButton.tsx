'use client';

import { useRouter } from 'next/navigation';

interface Props {
  label: string;
  subcategoriaId: number;
}

export default function ServiceButton({ label, subcategoriaId }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pesquisa?subcategoriaId=${subcategoriaId}`);
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
