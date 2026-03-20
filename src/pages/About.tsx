import host1 from "@/assets/host-1.jpg";
import host2 from "@/assets/host-2.jpg";

const About = () => (
  <div>
    {/* Header */}
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 text-center max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
        About Us
      </h1>
      <p className="text-lg text-muted-foreground font-sans leading-relaxed">
        We're two 43-year-old women who've been best friends long enough to skip the small talk and go straight to the existential crises. This podcast is what happens when you stop performing and start telling each other the truth.
      </p>
    </section>

    {/* Hosts */}
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* Host 1 */}
          <div className="text-center">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-buttercream shadow-lg">
              <img src={host1} alt="Host One" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-1">[Host Name]</h2>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-4">Co-Host & Chief Overthinker</p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-xs mx-auto">
              Mom of three, entrepreneur, recovering people-pleaser. She brings the spreadsheets, the strategy, and the emotional breakdowns — sometimes in the same sentence. Believes every hard conversation is worth having, preferably over wine.
            </p>
          </div>

          {/* Host 2 */}
          <div className="text-center">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-powder-blue/30 shadow-lg">
              <img src={host2} alt="Host Two" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-serif font-bold text-foreground mb-1">[Host Name]</h2>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-4">Co-Host & Professional Realist</p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-xs mx-auto">
              Mom of two, business owner, the friend who texts you back within 30 seconds. She brings the humor, the tough love, and the uncanny ability to name exactly what you're feeling before you can. Keeps it real, always.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Voice & Themes */}
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
        What We Talk About
      </h2>
      <p className="text-base text-muted-foreground font-sans leading-relaxed mb-8">
        Every episode is a real conversation — not a performance. We cover the things that actually keep you up at night and the things that make you laugh until you cry. There's no script, no agenda, just two friends who refuse to pretend they have it figured out.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {["Motherhood", "Marriage", "Friendship", "Entrepreneurship", "Mental Health", "Real Life"].map((topic) => (
          <div
            key={topic}
            className="bg-muted rounded-lg py-4 px-3 text-sm font-sans font-medium text-foreground border border-border"
          >
            {topic}
          </div>
        ))}
      </div>
    </section>

    {/* Pull Quote */}
    <section className="bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 text-center max-w-2xl">
        <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
          "We're not experts. We're just two women who decided that being honest out loud is better than being perfect in silence."
        </blockquote>
      </div>
    </section>
  </div>
);

export default About;
