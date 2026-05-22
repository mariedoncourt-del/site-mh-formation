import { Link } from "wouter";

const formations = [
  {
    num: "01",
    tag: "PARCOURS PRINCIPAL",
    title: "Encadrement et management de proximité",
    text: "Ce programme aborde la gestion d'équipe en atelier et en service. Il dote l'encadrant d'outils d'organisation quotidienne pour coordonner les actions de production et maintenir la cohésion d'équipe.",
    span: "lg:col-span-12",
    titleSize: "text-2xl md:text-3xl",
  },
  {
    num: "02",
    tag: "RELATIONNEL",
    title: "Relations et communication en équipe",
    text: "Mieux gérer la transmission des consignes techniques de poste à poste, clarifier les échanges et apaiser les situations difficiles en service.",
    span: "lg:col-span-7",
    titleSize: "text-xl",
  },
  {
    num: "03",
    tag: "PUBLIC",
    title: "Accueil physique, téléphonique et gestion des réclamations",
    text: "Les situations d'accueil tendues dégradent rapidement l'image d'une structure lorsqu'elles ne sont pas traitées avec méthode. Ce programme structure les réflexes de l'intervenant face à l'insatisfaction.",
    span: "lg:col-span-5",
    titleSize: "text-xl",
    extraClass: "lg:mt-6",
  },
  {
    num: "04",
    tag: "MÉTHODES",
    title: "Gestion du temps, des priorités et de l'organisation personnelle",
    text: "Méthodologie de planification, hiérarchisation de la charge de travail et mise en œuvre d'outils pour stabiliser son organisation quotidienne.",
    span: "lg:col-span-5",
    titleSize: "text-xl",
  },
  {
    num: "05",
    tag: "COLLECTIF",
    title: "Coordination d'équipe et travail collaboratif",
    text: "Mettre en place des dynamiques de fonctionnement et des critères d'arbitrage communs afin de simplifier le travail d'équipe.",
    span: "lg:col-span-7",
    titleSize: "text-xl",
    extraClass: "lg:-mt-6",
  },
];

export default function Formations() {
  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Catalogue des formations.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            Des contenus opérationnels adaptés aux réalités professionnelles des secteurs industriel et tertiaire.
          </p>
        </div>
      </div>

      {/* Catalogue */}
      <div className="py-24 max-w-5xl mx-auto px-6 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-20">
          {formations.map((f) => (
            <div key={f.num} className={`${f.span} space-y-4 pl-4 relative ${f.extraClass || ""}`}>
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
              <span className="text-[10px] font-mono text-slate-300">{f.num} / {f.tag}</span>
              <h3 className={`${f.titleSize} font-serif font-light text-slate-900`}>
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-2xl">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        {/* Conformité */}
        <div className="p-8 bg-slate-50 text-xs text-slate-500 font-light leading-relaxed mt-12">
          <strong>Informations de conformité :</strong> Les programmes détaillés, les prérequis exigés, les objectifs pédagogiques visés, les modalités d'évaluation des acquis ainsi que les délais moyens d'accès aux sessions sont obligatoirement communiqués avant toute inscription définitive.
        </div>

        <div className="text-center">
          <Link to="/contact">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/15 pb-0.5 cursor-pointer">
              Demander un programme détaillé
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
