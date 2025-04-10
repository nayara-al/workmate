import AtomComponent from "../atoms";

export default function ReviewSummary() {
  return (
    <div className="p-4 border rounded bg-white space-y-2 w-full max-w-224">
      <div className="flex justify-between items-center">
        <h2 className="text-center font-bold text-lg text-secondary">AVALIAÇÕES E COMENTÁRIOS</h2>
        <AtomComponent.RatingStars rating={4.8} />
        <span className="text-sm text-gray-600">(Baseado em 120 avaliações)</span>
      </div>

      <div className="mt-2 space-y-1">
        <AtomComponent.Comment
          text="Carlos fez um excelente trabalho na instalação do meu quadro de distribuição. Rápido, organizado e muito educado!"
          author="Ana P."
        />
        <AtomComponent.Comment
          text="Muito profissional! Explicou tudo com detalhes e deixou tudo funcionando perfeitamente."
          author="João M."
        />
        <AtomComponent.Comment
          text="Ótimo atendimento e preço justo. Recomendo!"
          author="Fernanda R."
        />
      </div>
    </div>
  );
}
