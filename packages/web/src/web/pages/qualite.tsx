import Section from "../components/Section";

/* Indicateurs administrables — modifier ces valeurs pour les mettre à jour */
const indicateurs = [
  { label: "Taux de satisfaction", value: "97 %" },
  { label: "Stagiaires formés", value: "250+" },
  { label: "Taux de recommandation", value: "96 %" },
  { label: "Heures de formation réalisées", value: "1 200+" },
];

const documents = [
  { label: "Certificat Qualiopi", href: "#" },
  { label: "Règlement intérieur", href: "#" },
  { label: "Conditions générales de vente", href: "#" },
  { label: "Livret d'accueil", href: "#" },
  { label: "Procédure handicap", href: "#" },
];

export default function Qualite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.1] animate-fade-up">
            Engagement qualité.
          </h1>
          <p className="mt-10 text-bleu/55 text-base md:text-[1.125rem] max-w-xl leading-[1.8] animate-fade-up animate-delay-1">
            MH Formation est certifié Qualiopi pour les actions de formation.<br />
            Cette certification atteste de la qualité des processus mis en œuvre dans le cadre de nos prestations.
          </p>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14">
          Nos engagements.
        </h2>
        <div className="max-w-xl space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          {[
            "Analyse des besoins en amont",
            "Adaptation des contenus pédagogiques",
            "Compétences et accompagnement des formateurs",
            "Suivi pédagogique et évaluation",
            "Amélioration continue des dispositifs",
          ].map((e) => (
            <p key={e}>
              <span className="text-bleu/25 mr-4">—</span>
              {e}
            </p>
          ))}
        </div>
      </Section>

      {/* INDICATEURS */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-16">
          Indicateurs qualité.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {indicateurs.map((ind) => (
            <div key={ind.label}>
              <p className="font-serif text-bleu text-3xl md:text-4xl font-light">
                {ind.value}
              </p>
              <p className="text-sm text-bleu/40 mt-3 tracking-wide">{ind.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INFORMATIONS AUDITABLES */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14">
          Informations.
        </h2>
        <div className="max-w-xl space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          {[
            "Modalités d'évaluation communiquées avant inscription",
            "Délais d'accès précisés dans la convention",
            "Prérequis identifiés en amont",
            "Suivi pédagogique assuré tout au long de la formation",
            "Traitement des réclamations sous 48 heures",
          ].map((info) => (
            <p key={info}>
              <span className="text-bleu/25 mr-4">—</span>
              {info}
            </p>
          ))}
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14">
          Documents utiles.
        </h2>
        <div className="max-w-lg space-y-0">
          {documents.map((doc) => (
            <div key={doc.label} className="flex items-center justify-between border-b border-border py-5">
              <span className="text-bleu/65 text-base">{doc.label}</span>
              <a
                href={doc.href}
                className="text-sm text-bleu/40 hover:text-bleu transition-colors duration-300 tracking-wide"
              >
                Télécharger →
              </a>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
