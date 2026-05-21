import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1 — Logo */}
          <div>
            <span className="font-serif text-bleu text-lg">MH Formation</span>
            <p className="text-sm text-bleu/50 mt-3 leading-relaxed">
              Formation professionnelle continue
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-xs text-bleu/40 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/approche", label: "Approche" },
                { href: "/formations", label: "Formations" },
                { href: "/financement", label: "Financement" },
                { href: "/qualite", label: "Qualité" },
                { href: "/accessibilite", label: "Accessibilité" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} to={l.href}>
                  <span className="text-sm text-bleu/60 hover:text-bleu transition-colors duration-300 cursor-pointer">
                    {l.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-xs text-bleu/40 uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="text-sm text-bleu/60 space-y-2 leading-relaxed">
              <p>20 Place Edmond Canet</p>
              <p>81000 Albi</p>
              <a
                href="mailto:contact@mhformation-institut.org"
                className="hover:text-bleu transition-colors duration-300 block"
              >
                contact@mhformation-institut.org
              </a>
            </div>
          </div>

          {/* Col 4 — Qualiopi */}
          <div>
            <p className="text-xs text-bleu/40 uppercase tracking-widest mb-4">
              Certification
            </p>
            <div className="text-sm text-bleu/60 space-y-2 leading-relaxed">
              <p>Certifié Qualiopi</p>
              <p>SIRET 939 035 721 00017</p>
              <Link to="/qualite">
                <span className="hover:text-bleu transition-colors duration-300 cursor-pointer">
                  Engagement qualité
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-bleu/40">
            © {new Date().getFullYear()} MH Formation. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales">
              <span className="text-xs text-bleu/40 hover:text-bleu/60 transition-colors duration-300 cursor-pointer">
                Mentions légales
              </span>
            </Link>
            <Link to="/confidentialite">
              <span className="text-xs text-bleu/40 hover:text-bleu/60 transition-colors duration-300 cursor-pointer">
                Politique de confidentialité
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
