import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Identité */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-sm font-serif tracking-[0.2em] text-slate-900 uppercase font-semibold">
              MH Formation
            </span>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium mt-1">
              Formation professionnelle continue
            </p>
            <div className="mt-6 text-sm text-slate-600 font-light leading-relaxed space-y-1">
              <p>20 Place Edmond Canet</p>
              <p>81000 Albi</p>
            </div>
            <a
              href="mailto:contact@mhformation-institut.org"
              className="block mt-4 text-sm text-slate-600 font-light hover:text-slate-900 transition-colors duration-300"
            >
              contact@mhformation-institut.org
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium block mb-4">Navigation</span>
            <nav className="flex flex-col space-y-2.5">
              {[
                { href: "/approche", label: "Approche" },
                { href: "/formations", label: "Formations" },
                { href: "/financement", label: "Financement" },
                { href: "/qualite", label: "Qualité" },
                { href: "/accessibilite", label: "Handicap" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} to={l.href}>
                  <span className="text-xs text-slate-500 hover:text-slate-800 transition-colors duration-300 cursor-pointer">
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Informations légales */}
          <div className="md:col-span-3 md:col-start-10">
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium block mb-4">Légal</span>
            <nav className="flex flex-col space-y-2.5">
              {[
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/confidentialite", label: "Confidentialité" },
                { href: "#", label: "CGV" },
                { href: "/qualite#documents", label: "Réclamation" },
              ].map((l) => (
                <Link key={l.label} to={l.href}>
                  <span className="text-xs text-slate-500 hover:text-slate-800 transition-colors duration-300 cursor-pointer">
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-slate-400 font-light">
          <p>SIRET 939 035 721 00017</p>
          <p>© {new Date().getFullYear()} MH Formation</p>
        </div>
      </div>
    </footer>
  );
}
