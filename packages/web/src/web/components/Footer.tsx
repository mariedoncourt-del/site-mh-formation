import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-xs font-light">
          {/* Identité */}
          <div className="space-y-4 max-w-sm">
            <span className="text-sm font-serif tracking-[0.22em] text-slate-900 uppercase font-semibold">
              MH Formation
            </span>
            <p className="text-slate-400 leading-relaxed text-[12px] font-light mt-3">
              Secteurs industriel et tertiaire. Organisme de formation professionnelle continue à Albi.
            </p>
          </div>

          {/* Liens + Coordonnées */}
          <div className="space-y-4 md:text-right">
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end text-[11px] text-slate-400">
              <Link to="/qualite"><span className="hover:text-slate-600 transition-colors cursor-pointer">Qualité</span></Link>
              <Link to="/contact"><span className="hover:text-slate-600 transition-colors cursor-pointer">Contact</span></Link>
              <Link to="/mentions-legales"><span className="hover:text-slate-600 transition-colors cursor-pointer">Mentions légales</span></Link>
              <Link to="/confidentialite"><span className="hover:text-slate-600 transition-colors cursor-pointer">Confidentialité</span></Link>
            </div>
            <p className="text-[11px] text-slate-400/80 leading-relaxed font-light">
              Place Edmond Canet, Albi — contact@mhformation-institut.org
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-100 text-[11px] text-slate-300 font-light">
          <p>SIRET 939 035 721 00017 — © {new Date().getFullYear()} MH Formation</p>
        </div>
      </div>
    </footer>
  );
}
