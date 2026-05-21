import Section from "../components/Section";

/* ─── Indicateurs administrables ─── */
const indicateurs = [
  { label: "Taux de satisfaction", value: "Données en cours de consolidation" },
  { label: "Stagiaires formés", value: "Données en cours de consolidation" },
  { label: "Taux de recommandation", value: "Données en cours de consolidation" },
  { label: "Heures de formation réalisées", value: "Données en cours de consolidation" },
];

const documents = [
  { label: "Certificat Qualiopi", href: "#" },
  { label: "Règlement intérieur", href: "#" },
  { label: "Conditions générales de vente", href: "#" },
  { label: "Livret d'accueil", href: "#" },
  { label: "Procédure handicap", href: "#" },
  { label: "Procédure de réclamation", href: "#" },
];

export default function Qualite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[48ch]">
            <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Engagement qualité.
            </h1>
            <p className="mt-12 text-bleu/45 text-[0.95rem] leading-[1.9] animate-fade-up animate-delay-1">
              MH Formation est certifié Qualiopi pour les actions de formation.<br />
              Cette certification atteste de la qualité des processus mis en œuvre dans le cadre de nos prestations.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Nos engagements.
          </h2>
          <div className="mt-16 md:mt-24 space-y-2 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>— Analyse des besoins en amont</p>
            <p>— Adaptation des contenus pédagogiques</p>
            <p>— Compétences et accompagnement des formateurs</p>
            <p>— Suivi pédagogique et évaluation</p>
            <p>— Amélioration continue des dispositifs</p>
          </div>
        </div>
      </Section>

      {/* INDICATEURS */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Indicateurs qualité.
          </h2>
          <div className="mt-16 md:mt-24 space-y-10">
            {indicateurs.map((ind) => (
              <div key={ind.label}>
                <p className="text-[0.75rem] text-bleu/30 tracking-[0.08em]">{ind.label}</p>
                <p className="text-bleu/55 text-[0.95rem] leading-[1.9] mt-1">{ind.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Documents utiles.
          </h2>
          <div className="mt-16 md:mt-24 space-y-0">
            {documents.map((doc) => (
              <div key={doc.label} className="flex items-center justify-between py-4 border-b border-bleu/5">
                <span className="text-bleu/50 text-[0.95rem]">{doc.label}</span>
                <a
                  href={doc.href}
                  className="text-[0.75rem] text-bleu/25 hover:text-bleu/50 transition-colors duration-500 tracking-[0.06em]"
                >
                  Télécharger
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
