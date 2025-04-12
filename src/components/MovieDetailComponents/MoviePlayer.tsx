type MoviePlayerProps = {
  id: string;
  title: string;
};

const MoviePlayer = ({ id, title }: MoviePlayerProps) => {
  return (
    <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl p-6 ">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden">
        <iframe
          src={`https://embed.su/embed/movie/${id}`}
          allowFullScreen
          frameBorder="0"
          className="w-full h-[500px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default MoviePlayer;
