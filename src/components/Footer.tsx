import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Proof of Life</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Two delusional besties telling each other exactly.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground mb-3">Navigate</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/episodes" className="text-sm text-foreground hover:text-primary transition-colors">Episodes</Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground mb-3">Follow Along</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">TikTok</a>
            <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Twitter / X</a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Proof of Life Podcast. All rights reserved. Made with love & delusion.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
