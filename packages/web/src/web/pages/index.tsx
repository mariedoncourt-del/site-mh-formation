import { Link } from "wouter";
import Section from "../components/Section";

export default function Accueil() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex flex-col justify-center bg-cream relative pt-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] w-full">
          <div className="flex items-stretch gap-8 md:gap-12">
            {/* Ligne verticale fine */}
            <div className="hidden md:block w-[1px] bg-bleu/12 shrink-0" />

            <div className="max-w-2xl">
              <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6.5rem)] font-light leading-[1.05] animate-fade-up">
                Compétences utiles.
              </h1>
              <p className="font-serif text-bleu/60 text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.1] mt-3 animate-fade-up animate-delay-1">
                Application immédiate.
              </p>

              <div className="mt-14 md:mt-20 animate-fade-up animate-delay-2">
                <p className="text-sm text-bleu/45 leading-relaxed tracking-wide">
                  Formation professionnelle continue
                </p>
                <p className="text-sm text-bleu/45 tracking-wide">
                  Secteurs industriel et tertiaire
                </p>
              </div>

              <div className="mt-10 animate-fade-up animate-delay-3">
                <Link to="/contact">
                  <span className="inline-block text-sm border border-bleu/25 text-bleu/80 px-7 py-3.5 tracking-wide transition-all duration-[400ms] hover:border-bleu/50 hover:text-bleu cursor-pointer">
                    Parler de votre projet
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bas du hero */}
        <div className="absolute bottom-10 left-6 md:left-[90px] flex gap-8 text-xs text-bleu/25 tracking-wider animate-fade-up animate-delay-5">
          <span>Albi</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">mhformation-institut.org</span>
        </div>
      </section>

      {/* SECTION 2 — POSITIONNEMENT */}
      <Section>
        <div className="md:max-w-[55%] min-w-0">
          <h2 className="font-serif text-bleu text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.15]">
            Former<br />pour transformer.
          </h2>

          <div className="mt-14 md:mt-20 space-y-5 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
            <p>La plupart des formations sont oubliées rapidement.</p>
            <p className="text-bleu/40">Trop longues.</p>
            <p className="text-bleu/40">Trop théoriques.</p>
            <p className="text-bleu/40">Trop éloignées du réel.</p>
          </div>

          <div className="mt-12 space-y-4 text-bleu text-base md:text-[1.125rem] leading-[1.8]">
            <p>Chez MH Formation, nous faisons l'inverse.</p>
            <p>Concrètes.</p>
            <p>Ciblées.</p>
            <p>Immédiatement applicables.</p>
          </div>

          <p className="mt-10 text-bleu/50 text-base md:text-[1.125rem] leading-[1.8]">
            Chaque programme vise un résultat visible sur le terrain.
          </p>
        </div>
      </Section>

      {/* SECTION 3 — CE QUE VOUS GAGNEZ */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14 md:mb-20">
          Ce que vous gagnez.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6">
          {[
            "Montée en compétence rapide",
            "Méthodes directement applicables",
            "Plus d'autonomie au quotidien",
            "Amélioration visible des pratiques professionnelles",
          ].map((item) => (
            <p key={item} className="text-bleu/65 text-base md:text-[1.125rem] leading-[1.8]">
              <span className="text-bleu/25 mr-4">—</span>
              {item}
            </p>
          ))}
        </div>
      </Section>

      {/* SECTION 4 — DOMAINES */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14 md:mb-20">
          Domaines d'intervention.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-5">
          {[
            "Management de proximité",
            "Communication professionnelle",
            "Relation client",
            "Organisation du travail",
            "Efficacité opérationnelle",
            "Accompagnement individuel et collectif",
          ].map((item) => (
            <p key={item} className="text-bleu/65 text-base md:text-[1.125rem] leading-[1.8]">
              <span className="text-bleu/25 mr-4">—</span>
              {item}
            </p>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/formations">
            <span className="text-sm text-bleu/45 hover:text-bleu transition-colors duration-300 border-b border-bleu/15 hover:border-bleu/40 pb-1 cursor-pointer tracking-wide">
              Voir les formations
            </span>
          </Link>
        </div>
      </Section>

      {/* SECTION 5 — QUALIOPI */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-10">
          Qualité &amp; accompagnement.
        </h2>
        <div className="max-w-xl space-y-5 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>
            Organisme certifié Qualiopi<br />
            pour les actions de formation.
          </p>
          <p>Adaptation des formations aux personnes en situation de handicap.</p>
          <p>
            Accompagnement aux solutions de financement&nbsp;:<br />
            OPCO, CPF et plan de développement des compétences.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/qualite">
            <span className="text-sm text-bleu/45 hover:text-bleu transition-colors duration-300 cursor-pointer tracking-wide">
              En savoir plus →
            </span>
          </Link>
        </div>
      </Section>
    </main>
  );
}
