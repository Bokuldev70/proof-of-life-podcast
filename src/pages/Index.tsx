import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { episodes } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  const latestEpisode = episodes[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img src={logo} alt="Proof of Life" className="h-20 md:h-28 w-auto mx-auto lg:mx-0 mb-6" />
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                Motherhood. Marriage. Entrepreneurship. Real life. Two best friends saying everything you're thinking but won't say out loud.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button variant="coral" size="lg" asChild>
                  <a href="#listen">Listen Now</a>
                </Button>
                <Button variant="outline-brand" size="lg" asChild>
                  <Link to="/about">Meet the Hosts</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden border-4 border-buttercream shadow-xl">
                <img
                  src={heroImage}
                  alt="Two best friends laughing over coffee"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-buttercream rounded-full -z-10 hidden md:block" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* About the Show */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Honestly? We started this podcast because nobody else was going to tell us the truth.
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed mb-4">
            <em>Proof of Life</em> is the conversation between two best friends who are done pretending adulthood comes with instructions. We talk about the beautiful mess of raising kids, running businesses, staying married, and somehow keeping a friendship alive through all of it.
          </p>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            Every week we bring humor, honesty, and the kind of emotional honesty that makes you text your best friend afterward. No performance. No filters. Just proof that we're still here, still trying, and still laughing about it.
          </p>
        </div>
      </section>

      {/* Listen Now */}
      <section id="listen" className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          Listen Wherever You Pretend to Be Busy
        </h2>
        <p className="text-muted-foreground font-sans mb-8">
          Available on all the platforms. No excuses.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="coral" size="lg" asChild>
            <a href="#">Apple Podcasts</a>
          </Button>
          <Button variant="rose" size="lg" asChild>
            <a href="#">Spotify</a>
          </Button>
          <Button variant="outline-brand" size="lg" asChild>
            <a href="#">YouTube</a>
          </Button>
        </div>
      </section>

      {/* Latest Episode */}
      {latestEpisode && (
        <section className="bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Latest Episode
              </h2>
              <p className="text-muted-foreground font-sans">Fresh delusion, delivered weekly.</p>
            </div>
            <div className="max-w-md mx-auto">
              <EpisodeCard episode={latestEpisode} />
            </div>
            <div className="text-center mt-8">
              <Button variant="outline-brand" asChild>
                <Link to="/episodes">See All Episodes</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Email Signup */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center max-w-xl">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
          Stay in the Loop
        </h2>
        <p className="text-muted-foreground font-sans mb-6">
          New episodes, behind-the-scenes chaos, and the occasional unsolicited life advice — straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-full border border-border bg-card text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button variant="coral" type="submit" className="rounded-full">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Index;
