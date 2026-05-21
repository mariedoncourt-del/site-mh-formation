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
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[44ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Engagement qualité.
            </h1>
            <p className="mt-16 text-bleu/35 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-1">
              MH Formation est certifié Qualiopi pour les actions de formation.
            </p>
            <p className="mt-5 text-bleu/30 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-2">
              Cette certification atteste de la qualité des processus mis en œuvre dans le cadre de nos prestations.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <Section>
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Nos engagements.
          </h2>
          <div className="mt-20 md:mt-28 space-y-2 text-bleu/35 text-[0.95rem] leading-[1.85]">
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
        <div className="md:ml-[8%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Indicateurs qualité.
          </h2>
          <div className="mt-20 md:mt-28 space-y-14">
            {indicateurs.map((ind) => (
              <div key={ind.label}>
                <p className="text-[0.72rem] text-bleu/18 tracking-[0.07em]">{ind.label}</p>
                <p className="text-bleu/40 text-[0.95rem] leading-[1.85] mt-2">{ind.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section id="documents">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Documents utiles.
          </h2>
          <div className="mt-20 md:mt-28">
            {documents.map((doc) => (
              <div key={doc.label} className="flex items-center justify-between py-6 border-b border-bleu/3">
                <span className="text-bleu/38 text-[0.95rem]">{doc.label}</span>
                <a
                  href={doc.href}
                  className="text-[0.72rem] text-bleu/15 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em]"
                >
                  Télécharger →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
