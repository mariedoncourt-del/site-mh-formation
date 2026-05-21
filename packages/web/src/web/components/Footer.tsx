import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] py-28 md:py-40">

        <div className="w-6 h-px bg-bleu/5 mb-20 md:mb-28" />

        <span className="font-serif text-bleu text-[1rem] font-light">
          MH Formation
        </span>
        <p className="text-[0.75rem] text-bleu/25 mt-1.5 tracking-[0.06em]">
          Formation professionnelle continue
        </p>

        <div className="mt-14 text-[0.95rem] text-bleu/35 leading-[1.9] space-y-0.5">
          <p>20 Place Edmond Canet</p>
          <p>81000 Albi</p>
          <a href="mailto:contact@mhformation-institut.org" className="block mt-3 hover:text-bleu/50 transition-colors duration-500">
            contact@mhformation-institut.org
          </a>
        </div>

        <nav className="mt-16 flex flex-wrap gap-x-6 gap-y-2.5">
          {[
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/confidentialite", label: "Politique de confidentialité" },
            { href: "#", label: "CGV" },
            { href: "/qualite", label: "Qualité & Qualiopi" },
            { href: "/accessibilite", label: "Accessibilité & handicap" },
            { href: "/qualite#documents", label: "Réclamation" },
          ].map((l) => (
            <Link key={l.label} to={l.href}>
              <span className="text-[0.72rem] text-bleu/20 hover:text-bleu/40 transition-colors duration-500 cursor-pointer tracking-[0.06em]">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-20 md:mt-28 text-[0.7rem] text-bleu/18 tracking-[0.06em] leading-relaxed space-y-0.5">
          <p>Certifié Qualiopi — Actions de formation</p>
          <p>SIRET 939 035 721 00017</p>
        </div>

        <p className="text-[0.7rem] text-bleu/12 tracking-[0.06em] mt-5">
          © {new Date().getFullYear()} MH Formation
        </p>
      </div>
    </footer>
  );
}
