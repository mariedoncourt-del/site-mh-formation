import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/formations", label: "Formations" },
  { href: "/financement", label: "Financement" },
  { href: "/qualite", label: "Qualité" },
  { href: "/accessibilite", label: "Handicap" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFCFC]/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <span className="text-sm font-serif tracking-[0.2em] text-slate-900 uppercase font-semibold cursor-pointer">
            MH Formation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} to={link.href}>
              <span
                className={`py-1 cursor-pointer transition-colors duration-300 ${
                  location === link.href ? "text-slate-900" : "hover:text-slate-700"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase border-b border-slate-900/20 text-slate-900 hover:border-slate-900 transition-colors duration-300 cursor-pointer pb-0.5">
              Parler de votre projet
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1 text-slate-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu principal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <nav className="flex flex-col space-y-5 p-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <span
                  className={`cursor-pointer ${
                    location === link.href ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link to="/contact">
              <span className="text-slate-900 font-semibold pt-4 border-t border-slate-100 block cursor-pointer">
                Parler de votre projet
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
