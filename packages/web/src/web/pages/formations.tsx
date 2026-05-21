import Section from "../components/Section";
import { useReveal } from "../hooks/useReveal";

const formations = [
  {
    title: "Management de proximité",
    text: "Développer une communication claire, une posture managériale stable et des méthodes directement applicables au quotidien.",
  },
  {
    title: "Communication professionnelle",
    text: "Renforcer les échanges professionnels, la posture relationnelle et la qualité de communication interne.",
  },
  {
    title: "Relation client",
    text: "Améliorer l'accueil, la gestion des situations sensibles et la qualité relationnelle.",
  },
  {
    title: "Organisation du travail",
    text: "Développer des méthodes concrètes pour améliorer l'efficacité opérationnelle et la gestion des priorités.",
  },
  {
    title: "Accompagnement collectif",
    text: "Favoriser la cohésion, les dynamiques d'équipe et les pratiques collaboratives.",
  },
];

function FormationBlock({ f, isFirst }: { f: (typeof formations)[0]; isFirst: boolean }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`py-16 md:py-24 reveal ${visible ? "visible" : ""}`}>
      {!isFirst && <div className="w-5 h-px bg-bleu/5 mb-14 md:mb-18" />}
      <h2 className="font-serif text-bleu text-[clamp(1.5rem,3.2vw,2.2rem)] font-light leading-[1.15]">
        {f.title}
      </h2>
      <p className="text-bleu/42 text-[0.95rem] leading-[1.9] mt-6 max-w-[48ch]">
        {f.text}
      </p>
    </div>
  );
}

export default function Formations() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-16 md:pt-56 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[48ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Des formations conçues<br />pour le terrain.
            </h1>
            <p className="mt-14 text-bleu/42 text-[0.95rem] leading-[1.9] animate-fade-up animate-delay-1">
              Des contenus opérationnels adaptés aux réalités professionnelles des secteurs industriel et tertiaire.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {formations.map((f, i) => (
          <FormationBlock key={f.title} f={f} isFirst={i === 0} />
        ))}
      </div>

      {/* CONFORMITÉ QUALIOPI */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <p className="text-bleu/38 text-[0.95rem] leading-[1.9]">
            Programmes détaillés, prérequis, objectifs pédagogiques, modalités d'évaluation et délais d'accès communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
