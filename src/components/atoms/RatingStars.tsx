export default function RatingStars({ rating }: { rating: number }) {
    return (
      <div className="flex space-x-1 text-4xl">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-4xl w-6 h-6">{i <= rating ? "★" : "☆"}</span>
        ))}
      </div>
    );
  }