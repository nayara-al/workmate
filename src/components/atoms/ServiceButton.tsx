'use client';

import { useRouter } from 'next/navigation';

export default function ServiceButton({ label }: { label: string }) {
  const router = useRouter();

  const handleClick = () => {
    const encoded = encodeURIComponent(label.toLowerCase());
    router.push(`/pesquisa?servico=${encoded}`);
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
