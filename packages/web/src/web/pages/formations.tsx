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

function FormationBlock({ f, index }: { f: (typeof formations)[0]; index: number }) {
  const { ref, visible } = useReveal();
  const offset = index % 3 === 1 ? "md:ml-[10%]" : index % 3 === 2 ? "md:ml-[5%]" : "";
  return (
    <div ref={ref} className={`py-20 md:py-28 reveal ${visible ? "visible" : ""}`}>
      <div className={`${offset} max-w-[44ch]`}>
        <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
          {f.title}
        </h2>
        <p className="text-bleu/35 text-[0.95rem] leading-[1.85] mt-7">
          {f.text}
        </p>
      </div>
    </div>
  );
}

export default function Formations() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[44ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Des formations conçues<br />pour le terrain.
            </h1>
            <p className="mt-16 text-bleu/35 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-1">
              Des contenus opérationnels adaptés aux réalités professionnelles des secteurs industriel et tertiaire.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {formations.map((f, i) => (
          <FormationBlock key={f.title} f={f} index={i} />
        ))}
      </div>

      {/* CONFORMITÉ QUALIOPI */}
      <Section bg="gris">
        <div className="max-w-[44ch]">
          <p className="text-bleu/30 text-[0.95rem] leading-[1.85]">
            Programmes détaillés, prérequis, objectifs pédagogiques, modalités d'évaluation et délais d'accès communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
