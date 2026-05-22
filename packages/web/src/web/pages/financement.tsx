import { Link } from "wouter";

export default function Financement() {
  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Financement des parcours.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            Nous accompagnons les entreprises et les professionnels dans leurs démarches de prise en charge et de financement de leurs projets de formation continue.
          </p>
        </div>
      </div>

      {/* Dispositifs */}
      <div className="py-20 max-w-4xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600 font-light leading-relaxed">
          {[
            {
              title: "OPCO",
              text: "Prise en charge possible selon les critères d'évaluation et d'attribution de votre branche professionnelle et de votre opérateur collecteur.",
            },
            {
              title: "CPF",
              text: "Mobilisation du Compte Personnel de Formation selon les dispositifs en vigueur, réservée aux modules de formation certifiants de notre catalogue.",
            },
            {
              title: "Plan de développement",
              text: "Accompagnement direct des services RH dans l'organisation, la programmation et le financement global de l'effort de formation des équipes.",
            },
          ].map((b) => (
            <div key={b.title} className="space-y-3 pl-4 relative">
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
              <h3 className="text-base font-serif text-slate-900 font-medium">{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        {/* Accompagnement administratif */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 pl-4 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
            <h3 className="text-base font-serif text-slate-900 font-medium">Accompagnement administratif</h3>
          </div>
          <div className="lg:col-span-8 space-y-4 text-sm text-slate-600 font-light leading-relaxed">
            <p>
              Pour faciliter vos démarches de prise en charge financière, nous vous fournissons l'intégralité des pièces réglementaires :
            </p>
            <ul className="space-y-1.5 pl-4 border-l border-slate-200 text-slate-600/90 text-xs md:text-sm">
              <li>— devis formels personnalisés</li>
              <li>— conventions de formation professionnelles</li>
              <li>— programmes pédagogiques officiels détaillés</li>
              <li>— convocations nominatives des stagiaires</li>
              <li>— attestations de fin de formation</li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Les délais d'accès et les modalités administratives spécifiques à chaque dossier sont systématiquement communiqués avant toute contractualisation.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link to="/contact">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/15 pb-0.5 cursor-pointer">
              Nous contacter
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
