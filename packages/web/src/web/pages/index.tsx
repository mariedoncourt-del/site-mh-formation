import { Link } from "wouter";
import Section from "../components/Section";

export default function Accueil() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="min-h-[100svh] flex flex-col justify-center bg-cream relative pt-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] w-full">
          <div className="md:max-w-[55%]">
            <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Compétences utiles.
            </h1>
            <p className="font-serif text-bleu/45 text-[clamp(2.2rem,6vw,4.8rem)] font-light leading-[1.05] tracking-[-0.015em] mt-1 animate-fade-up animate-delay-1">
              Application immédiate.
            </p>

            <div className="mt-24 md:mt-32 animate-fade-up animate-delay-2">
              <p className="text-[0.75rem] text-bleu/30 tracking-[0.1em]">
                Formation professionnelle continue
              </p>
              <p className="text-[0.75rem] text-bleu/30 tracking-[0.1em] mt-0.5">
                Secteurs industriel et tertiaire
              </p>
            </div>

            <div className="mt-10 animate-fade-up animate-delay-3">
              <Link to="/contact">
                <span className="inline-block text-[0.75rem] text-bleu/40 hover:text-bleu/65 transition-colors duration-500 tracking-[0.08em] cursor-pointer border border-bleu/12 hover:border-bleu/25 px-5 py-2.5">
                  Parler de votre projet
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne verticale très fine, courte */}
        <div className="hidden md:block absolute top-[30%] left-[88px] w-px h-16 bg-bleu/5" />

        <div className="absolute bottom-10 left-6 md:left-[90px] text-[0.65rem] text-bleu/15 tracking-[0.2em] animate-fade-up animate-delay-5">
          Albi
        </div>
      </section>

      {/* ─── FORMER POUR TRANSFORMER ─── */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Former pour transformer.
          </h2>

          <div className="mt-16 md:mt-24 space-y-4 text-bleu/40 text-[0.95rem] leading-[1.9]">
            <p>La plupart des formations sont oubliées rapidement.</p>
            <p>Trop longues. Trop théoriques. Trop éloignées du réel.</p>
          </div>

          <div className="mt-10 text-bleu/65 text-[0.95rem] leading-[1.9]">
            <p>Chez MH Formation, nous faisons l'inverse.</p>
            <p className="mt-4 font-medium">Concrètes.<br />Ciblées.<br />Immédiatement applicables.</p>
          </div>

          <p className="mt-10 text-bleu/40 text-[0.95rem] leading-[1.9]">
            Chaque programme vise un résultat visible sur le terrain.
          </p>
        </div>
      </Section>

      {/* ─── CE QUE VOUS GAGNEZ ─── */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Ce que vous gagnez.
          </h2>
          <div className="mt-16 md:mt-24 space-y-3 text-bleu/50 text-[0.95rem] leading-[1.9]">
            <p>Montée en compétence rapide</p>
            <p>Méthodes directement applicables</p>
            <p>Plus d'autonomie au quotidien</p>
            <p>Amélioration visible des pratiques professionnelles</p>
          </div>
        </div>
      </Section>

      {/* ─── DOMAINES ─── */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Domaines d'intervention.
          </h2>
          <div className="mt-16 md:mt-24 space-y-3 text-bleu/50 text-[0.95rem] leading-[1.9]">
            <p>Management de proximité</p>
            <p>Communication professionnelle</p>
            <p>Relation client</p>
            <p>Organisation du travail</p>
            <p>Efficacité opérationnelle</p>
            <p>Accompagnement individuel et collectif</p>
          </div>
          <div className="mt-12">
            <Link to="/formations">
              <span className="text-[0.75rem] text-bleu/30 hover:text-bleu/55 transition-colors duration-500 tracking-[0.06em] cursor-pointer border-b border-bleu/8 hover:border-bleu/20 pb-px">
                Voir les formations
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ─── QUALITÉ ─── */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Qualité et accompagnement.
          </h2>
          <div className="mt-16 md:mt-24 space-y-4 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Organisme certifié Qualiopi<br />pour les actions de formation.</p>
            <p>Adaptation des formations aux personnes en situation de handicap.</p>
            <p>Accompagnement aux solutions de financement&thinsp;:<br />OPCO, CPF et plan de développement des compétences.</p>
          </div>
          <div className="mt-12">
            <Link to="/qualite">
              <span className="text-[0.75rem] text-bleu/30 hover:text-bleu/55 transition-colors duration-500 tracking-[0.06em] cursor-pointer border-b border-bleu/8 hover:border-bleu/20 pb-px">
                En savoir plus
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ─── CONTACT DISCRET ─── */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Parlons de votre projet.
          </h2>
          <p className="mt-10 text-bleu/40 text-[0.95rem] leading-[1.9]">
            Nous accompagnons les entreprises et les professionnels<br />
            dans le développement de leurs compétences.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <span className="text-[0.75rem] text-bleu/30 hover:text-bleu/55 transition-colors duration-500 tracking-[0.06em] cursor-pointer border-b border-bleu/8 hover:border-bleu/20 pb-px">
                Nous contacter
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
