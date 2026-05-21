import { Link } from "wouter";
import Section from "../components/Section";
import { useReveal } from "../hooks/useReveal";

const formations = [
  {
    title: "Management de proximité",
    description:
      "Développer une communication claire, une posture managériale stable et des méthodes directement applicables au quotidien.",
    format: "Présentiel, distanciel ou hybride",
  },
  {
    title: "Communication professionnelle",
    description:
      "Renforcer les échanges professionnels, la posture relationnelle et la qualité de communication interne.",
    format: "Présentiel, distanciel ou hybride",
  },
  {
    title: "Relation client",
    description:
      "Améliorer l'accueil, la gestion des situations sensibles et la qualité relationnelle.",
    format: "Présentiel, distanciel ou hybride",
  },
  {
    title: "Organisation du travail",
    description:
      "Développer des méthodes concrètes pour améliorer l'efficacité opérationnelle et la gestion des priorités.",
    format: "Présentiel, distanciel ou hybride",
  },
  {
    title: "Accompagnement collectif",
    description:
      "Favoriser la cohésion, les dynamiques d'équipe et les pratiques collaboratives.",
    format: "Présentiel, distanciel ou hybride",
  },
];

function FormationBlock({ f }: { f: (typeof formations)[0] }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`border-t border-border pt-12 md:pt-16 pb-16 md:pb-24 reveal ${visible ? "visible" : ""}`}
    >
      <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-6">
        {f.title}
      </h2>
      <p className="text-bleu/55 text-base md:text-[1.125rem] max-w-lg leading-[1.8] mb-6">
        {f.description}
      </p>
      <p className="text-sm text-bleu/35 mb-8 tracking-wide">{f.format}</p>
      <Link to="/contact">
        <span className="text-sm text-bleu/50 hover:text-bleu border-b border-bleu/15 hover:border-bleu/40 pb-1 transition-all duration-300 cursor-pointer tracking-wide">
          Découvrir →
        </span>
      </Link>
    </div>
  );
}

export default function Formations() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.1] animate-fade-up">
            Des formations conçues<br />pour le terrain.
          </h1>
          <p className="mt-10 text-bleu/55 text-base md:text-[1.125rem] max-w-xl leading-[1.8] animate-fade-up animate-delay-1">
            Des contenus opérationnels adaptés aux réalités professionnelles des secteurs industriel et tertiaire.
          </p>
        </div>
      </section>

      {/* FORMATIONS LIST */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {formations.map((f) => (
          <FormationBlock key={f.title} f={f} />
        ))}
      </div>

      {/* SECTION CONFORMITÉ */}
      <Section bg="gris">
        <div className="max-w-xl text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>
            Programmes détaillés, prérequis, modalités d'évaluation, délais d'accès et objectifs pédagogiques communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
