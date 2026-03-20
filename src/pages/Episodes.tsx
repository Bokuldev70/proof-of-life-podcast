import { episodes } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";

const Episodes = () => (
  <div>
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 text-center max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
        Episodes
      </h1>
      <p className="text-lg text-muted-foreground font-sans leading-relaxed">
        Every conversation we've had that we thought, "other people need to hear this." Sorted newest first, because we're only getting better at this.
      </p>
    </section>

    <section className="container mx-auto px-4 md:px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      {episodes.length === 0 && (
        <p className="text-center text-muted-foreground font-sans py-12">
          Episodes coming soon. Stay tuned.
        </p>
      )}
    </section>
  </div>
);

export default Episodes;
