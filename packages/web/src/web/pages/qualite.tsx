import { Link } from "wouter";

/* ─── Indicateurs administrables ─── */
const indicateurs = [
  { label: "Taux de satisfaction globale", value: "Données en cours de consolidation" },
  { label: "Nombre de stagiaires formés", value: "Données en cours de consolidation" },
  { label: "Taux de recommandation", value: "Données en cours de consolidation" },
  { label: "Taux d'atteinte des objectifs pédagogiques", value: "Données en cours de consolidation" },
  { label: "Nombre d'heures de formation réalisées", value: "Données en cours de consolidation" },
];

const documents = [
  { label: "Règlement intérieur", href: "#" },
  { label: "Conditions Générales de Vente (CGV)", href: "#" },
  { label: "Livret d'accueil stagiaire", href: "#" },
  { label: "Procédure handicap", href: "#" },
  { label: "Procédure de réclamation", href: "#" },
];

export default function Qualite() {
  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Démarche qualité.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            MH Formation s'inscrit dans une démarche qualité conforme au Référentiel National Qualité (RNQ). Les indicateurs de résultat seront publiés dès qu'un volume suffisant de données aura été consolidé.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-4xl mx-auto px-6 space-y-16">
        {/* Engagements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 pl-4 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
            <h3 className="text-base font-serif text-slate-900 font-medium">Nos engagements</h3>
          </div>
          <div className="md:col-span-8 text-sm text-slate-600 font-light leading-relaxed space-y-4">
            <p>Le respect du Référentiel National Qualité (RNQ) se décline à travers les indicateurs majeurs suivants :</p>
            <ul className="space-y-2.5 pl-4 border-l border-slate-200">
              <li>— Analyse systématique des besoins opérationnels des apprenants en amont</li>
              <li>— Adaptation continue des parcours, durées et contenus de cours</li>
              <li>— Rigueur pédagogique, expertise technique et accompagnement continu des formateurs</li>
              <li>— Suivi de l'engagement des stagiaires et évaluation formalisée de fin d'action</li>
              <li>— Processus structuré d'amélioration continue intégrant les feedbacks des clients</li>
            </ul>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="pt-8 space-y-8">
          <div className="pl-4 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
            <h3 className="text-base font-serif text-slate-900 font-medium">Indicateurs qualité</h3>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium mt-1">
              Mis à jour annuellement
            </p>
          </div>
          <div className="space-y-6 pl-4">
            {indicateurs.map((ind) => (
              <div key={ind.label} className="py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-sm text-slate-600 font-light">{ind.label}</span>
                <span className="text-xs text-slate-400 italic">{ind.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div id="documents" className="pt-8 space-y-6">
          <h3 className="text-base font-serif text-slate-900 font-light">Téléchargements réglementaires</h3>
          <div className="space-y-2.5 text-xs font-light max-w-2xl">
            {documents.map((doc) => (
              <div key={doc.label} className="py-3 border-b border-slate-200 flex justify-between items-center">
                <span className="text-slate-600 font-mono">{doc.label}</span>
                <a href={doc.href} className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  Télécharger →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Réclamation */}
        <div className="pt-8 space-y-4">
          <h3 className="text-lg font-serif text-slate-900 font-medium">Gestion des réclamations</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Conformément aux exigences de la démarche qualité, nous disposons d'une procédure de traitement des réclamations. Tout bénéficiaire, client ou tiers peut faire part d'un dysfonctionnement ou d'une insatisfaction.
          </p>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Pour soumettre une réclamation, veuillez adresser un courriel contenant le détail de la situation à l'adresse :{" "}
            <strong className="text-slate-900 font-normal">contact@mhformation-institut.org</strong>. Notre équipe s'engage à accuser réception sous 48h ouvrées et à formuler une réponse circonstanciée dans un délai de 15 jours.
          </p>
        </div>

        {/* Délais d'accès */}
        <div className="pt-8 space-y-4">
          <h3 className="text-lg font-serif text-slate-900 font-medium">Délais d'accès</h3>
          <div className="text-sm text-slate-600 font-light leading-relaxed space-y-4">
            <p>
              Les délais d'accès varient selon la nature de la formation, les modalités de financement et la disponibilité des intervenants.
            </p>
            <p>
              En règle générale, un délai de 14 jours ouvrés minimum est nécessaire entre la demande et le début de la prestation.
            </p>
            <p>
              Les conditions précises sont communiquées lors de la phase d'analyse des besoins.
            </p>
          </div>
          <div className="pt-4">
            <Link to="/contact">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/15 pb-0.5 cursor-pointer">
                Nous contacter pour en savoir plus
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
