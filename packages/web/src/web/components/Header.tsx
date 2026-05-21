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
        scrolled ? "bg-cream/92 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] flex items-center justify-between">
        <Link to="/">
          <span className="font-serif text-bleu text-[1.05rem] tracking-[0.02em] cursor-pointer font-light">
            MH Formation
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden xl:flex items-center gap-9">
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} to={link.href}>
              <span
                className={`text-[0.75rem] tracking-[0.1em] transition-colors duration-500 cursor-pointer ${
                  location === link.href
                    ? "text-bleu/60"
                    : "text-bleu/30 hover:text-bleu/55"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link to="/contact">
            <span className="text-[0.75rem] tracking-[0.1em] text-bleu/30 hover:text-bleu/55 transition-colors duration-500 cursor-pointer border-b border-bleu/10 hover:border-bleu/25 pb-px">
              Parler de votre projet
            </span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-bleu/50 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-bleu/50 mt-[5px] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-bleu/50 mt-[5px] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-cream/98 backdrop-blur-sm">
          <nav className="max-w-[1180px] mx-auto px-6 py-14 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <span className={`font-serif text-lg font-light cursor-pointer ${location === link.href ? "text-bleu/60" : "text-bleu/35"}`}>
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
