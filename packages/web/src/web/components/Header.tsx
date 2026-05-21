import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/formations", label: "Formations" },
  { href: "/financement", label: "Financement" },
  { href: "/qualite", label: "Qualité" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? "bg-cream/95 backdrop-blur-sm py-3.5" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] flex items-center justify-between">
        <Link to="/">
          <span className="font-serif text-bleu text-[1rem] tracking-[0.02em] cursor-pointer font-light">
            MH Formation
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} to={link.href}>
              <span
                className={`text-[0.75rem] tracking-[0.08em] transition-colors duration-500 cursor-pointer ${
                  location === link.href
                    ? "text-bleu/55"
                    : "text-bleu/28 hover:text-bleu/50"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link to="/contact">
            <span className="text-[0.75rem] tracking-[0.08em] text-bleu/28 hover:text-bleu/50 transition-colors duration-500 cursor-pointer border-b border-bleu/10 hover:border-bleu/20 pb-px">
              Parler de votre projet
            </span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-[18px] h-px bg-bleu/40 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-[18px] h-px bg-bleu/40 mt-[5px] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[18px] h-px bg-bleu/40 mt-[5px] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cream/98 backdrop-blur-sm">
          <nav className="max-w-[1180px] mx-auto px-6 py-14 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <span className={`font-serif text-lg font-light cursor-pointer ${location === link.href ? "text-bleu/55" : "text-bleu/30"}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
