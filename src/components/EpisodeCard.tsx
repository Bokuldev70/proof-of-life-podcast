import type { Episode } from "@/data/episodes";

const EpisodeCard = ({ episode }: { episode: Episode }) => (
  <div className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={episode.thumbnail}
        alt={episode.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary">
          Episode {episode.number}
        </span>
        <span className="text-xs text-muted-foreground">{episode.duration}</span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
        {episode.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {episode.summary}
      </p>
      <div className="flex items-center gap-3">
        <a
          href={episode.spotifyUrl}
          className="text-xs font-sans font-semibold uppercase tracking-wide text-primary hover:text-secondary transition-colors"
        >
          Spotify
        </a>
        <span className="text-border">•</span>
        <a
          href={episode.appleUrl}
          className="text-xs font-sans font-semibold uppercase tracking-wide text-primary hover:text-secondary transition-colors"
        >
          Apple
        </a>
        <span className="text-border">•</span>
        <a
          href={episode.youtubeUrl}
          className="text-xs font-sans font-semibold uppercase tracking-wide text-primary hover:text-secondary transition-colors"
        >
          YouTube
        </a>
      </div>
    </div>
  </div>
);

export default EpisodeCard;
