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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <span className="font-serif text-bleu text-xl tracking-wide cursor-pointer">
            MH Formation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <span
                className={`text-[13px] font-sans tracking-wide transition-opacity duration-300 cursor-pointer whitespace-nowrap ${
                  location === link.href
                    ? "text-bleu opacity-100"
                    : "text-bleu/70 hover:opacity-100"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link to="/contact">
            <span className="text-[13px] border border-bleu/30 text-bleu px-5 py-2 transition-all duration-300 hover:border-bleu/60 cursor-pointer whitespace-nowrap">
              Parler de votre projet
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-[1.5px] bg-bleu transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-bleu transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-bleu transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-cream/98 backdrop-blur-sm border-t border-border mt-2">
          <nav className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <span
                  className={`font-serif text-2xl cursor-pointer ${
                    location === link.href ? "text-bleu" : "text-bleu/60"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link to="/contact">
              <span className="inline-block text-sm border border-bleu/30 text-bleu px-5 py-2 mt-4 cursor-pointer">
                Parler de votre projet
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
