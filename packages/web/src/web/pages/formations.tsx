import { Link } from "wouter";
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

function FormationBlock({ f }: { f: (typeof formations)[0] }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`py-14 md:py-20 reveal ${visible ? "visible" : ""}`}>
      <div className="w-8 h-px bg-bleu/6 mb-10" />
      <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
        {f.title}
      </h2>
      <p className="text-bleu/45 text-[0.95rem] leading-[1.9] mt-5 max-w-[48ch]">
        {f.text}
      </p>
      <div className="mt-8">
        <Link to="/contact">
          <span className="text-[0.75rem] text-bleu/30 hover:text-bleu/55 transition-colors duration-500 tracking-[0.06em] cursor-pointer border-b border-bleu/8 hover:border-bleu/20 pb-px">
            Découvrir
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Formations() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[48ch]">
            <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Des formations conçues<br />pour le terrain.
            </h1>
            <p className="mt-12 text-bleu/45 text-[0.95rem] leading-[1.9] animate-fade-up animate-delay-1">
              Des contenus opérationnels adaptés aux réalités professionnelles des secteurs industriel et tertiaire.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {formations.map((f) => (
          <FormationBlock key={f.title} f={f} />
        ))}
      </div>

      {/* CONFORMITÉ QUALIOPI */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <p className="text-bleu/40 text-[0.95rem] leading-[1.9]">
            Programmes détaillés, prérequis, objectifs pédagogiques, modalités d'évaluation et délais d'accès communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
