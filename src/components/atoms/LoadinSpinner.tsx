// components/LoadingSpinner.tsx
import React from 'react';

export default function LoadingSpinner({ message = "Carregando..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 text-center text-gray-600">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-base">{message}</p>
    </div>
  );
}
