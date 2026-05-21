import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] py-24 md:py-36">

        <div className="w-10 h-px bg-bleu/6 mb-20 md:mb-28" />

        <span className="font-serif text-bleu text-[1.1rem] font-light">
          MH Formation
        </span>
        <p className="text-[0.75rem] text-bleu/30 mt-2 tracking-[0.06em]">
          Formation professionnelle continue
        </p>

        <div className="mt-14 text-[0.95rem] text-bleu/40 leading-[1.9] space-y-0.5">
          <p>20 Place Edmond Canet</p>
          <p>81000 Albi</p>
          <a href="mailto:contact@mhformation-institut.org" className="block mt-3 hover:text-bleu/55 transition-colors duration-500">
            contact@mhformation-institut.org
          </a>
        </div>

        <nav className="mt-14 flex flex-wrap gap-x-7 gap-y-2.5">
          {[
            { href: "/approche", label: "Approche" },
            { href: "/formations", label: "Formations" },
            { href: "/financement", label: "Financement" },
            { href: "/qualite", label: "Qualité" },
            { href: "/accessibilite", label: "Accessibilité" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.href} to={l.href}>
              <span className="text-[0.75rem] text-bleu/25 hover:text-bleu/45 transition-colors duration-500 cursor-pointer tracking-[0.06em]">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
          <div className="text-[0.7rem] text-bleu/20 tracking-[0.06em] leading-relaxed space-y-0.5">
            <p>Certifié Qualiopi — Actions de formation</p>
            <p>SIRET 939 035 721 00017</p>
          </div>
          <div className="flex gap-5">
            <Link to="/mentions-legales">
              <span className="text-[0.7rem] text-bleu/20 hover:text-bleu/35 transition-colors duration-500 cursor-pointer tracking-[0.06em]">
                Mentions légales
              </span>
            </Link>
            <Link to="/confidentialite">
              <span className="text-[0.7rem] text-bleu/20 hover:text-bleu/35 transition-colors duration-500 cursor-pointer tracking-[0.06em]">
                Confidentialité
              </span>
            </Link>
          </div>
        </div>

        <p className="text-[0.7rem] text-bleu/15 tracking-[0.06em] mt-6">
          © {new Date().getFullYear()} MH Formation
        </p>
      </div>
    </footer>
  );
}
