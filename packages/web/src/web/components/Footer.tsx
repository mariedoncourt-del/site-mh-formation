import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] py-36 md:py-52">

        <span className="font-serif text-bleu/30 text-[0.95rem] font-light">
          MH Formation
        </span>
        <p className="text-[0.72rem] text-bleu/15 mt-1 tracking-[0.06em]">
          Formation professionnelle continue
        </p>

        <div className="mt-16 text-[0.95rem] text-bleu/22 leading-[2] space-y-0">
          <p>20 Place Edmond Canet</p>
          <p>81000 Albi</p>
          <a href="mailto:contact@mhformation-institut.org" className="block mt-4 hover:text-bleu/35 transition-colors duration-700">
            contact@mhformation-institut.org
          </a>
        </div>

        <nav className="mt-20 flex flex-wrap gap-x-5 gap-y-2">
          {[
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/confidentialite", label: "Confidentialité" },
            { href: "#", label: "CGV" },
            { href: "/qualite", label: "Qualité" },
            { href: "/accessibilite", label: "Accessibilité" },
            { href: "/qualite#documents", label: "Réclamation" },
          ].map((l) => (
            <Link key={l.label} to={l.href}>
              <span className="text-[0.68rem] text-bleu/10 hover:text-bleu/25 transition-colors duration-700 cursor-pointer tracking-[0.05em]">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-28 md:mt-36 text-[0.68rem] text-bleu/10 tracking-[0.05em] leading-relaxed space-y-0.5">
          <p>Certifié Qualiopi — Actions de formation</p>
          <p>SIRET 939 035 721 00017</p>
          <p className="mt-4">© {new Date().getFullYear()} MH Formation</p>
        </div>
      </div>
    </footer>
  );
}
