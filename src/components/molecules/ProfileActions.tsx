export default function ProfileActions() {
  return (
    <section className="flex justify-center items-center gap-4 mt-6">
      <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-6 rounded shadow transition-colors">
        💲 Contratar
      </button>
      <button className="bg-sky-300 hover:bg-sky-400 text-black font-semibold py-2 px-6 rounded shadow transition-colors">
        💬 Conversar
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-6 rounded shadow transition-colors">
        📂 Portfólio
      </button>
    </section>
  );
}
