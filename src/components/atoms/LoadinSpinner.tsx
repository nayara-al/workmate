export default function LoadingSpinner({ message = "Carregando..." }: { message?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-600 z-50">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-base">{message}</p>
    </div>
  );
}