import { Link } from "wouter";
import Section from "../components/Section";

export default function Accueil() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="min-h-[100svh] flex flex-col justify-end bg-cream relative pb-24 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px] w-full">
          <div className="md:max-w-[50%]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Compétences utiles.
            </h1>
            <p className="font-serif text-bleu/30 text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up animate-delay-1">
              Application immédiate.
            </p>

            <div className="mt-40 md:mt-56 animate-fade-up animate-delay-2">
              <p className="text-[0.72rem] text-bleu/18 tracking-[0.07em]">
                Formation professionnelle continue
              </p>
              <p className="text-[0.72rem] text-bleu/18 tracking-[0.07em] mt-0.5">
                Secteurs industriel et tertiaire
              </p>
            </div>

            <div className="mt-14 animate-fade-up animate-delay-3">
              <Link to="/contact">
                <span className="text-[0.72rem] text-bleu/18 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em] cursor-pointer">
                  Parler de votre projet →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORMER POUR TRANSFORMER ─── */}
      <Section>
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Former pour transformer.
          </h2>

          <div className="mt-20 md:mt-28 space-y-6 text-bleu/32 text-[0.95rem] leading-[1.85]">
            <p>La plupart des formations sont oubliées rapidement.</p>
            <p>Trop longues.<br />Trop théoriques.<br />Trop éloignées du réel.</p>
          </div>

          <div className="mt-14 text-bleu/50 text-[0.95rem] leading-[1.85]">
            <p>Chez MH Formation, nous faisons l'inverse.</p>
            <p className="mt-6">Concrètes.<br />Ciblées.<br />Immédiatement applicables.</p>
          </div>

          <p className="mt-14 text-bleu/32 text-[0.95rem] leading-[1.85]">
            Chaque programme vise un résultat visible sur le terrain.
          </p>
        </div>
      </Section>

      {/* ─── CE QUE VOUS GAGNEZ ─── */}
      <Section>
        <div className="md:ml-[12%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Ce que vous gagnez.
          </h2>
          <div className="mt-20 md:mt-28 space-y-3.5 text-bleu/38 text-[0.95rem] leading-[1.85]">
            <p>Montée en compétence rapide</p>
            <p>Méthodes directement applicables</p>
            <p>Plus d'autonomie au quotidien</p>
            <p>Amélioration visible des pratiques professionnelles</p>
          </div>
        </div>
      </Section>

      {/* ─── DOMAINES ─── */}
      <Section>
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Domaines d'intervention.
          </h2>
          <div className="mt-20 md:mt-28 space-y-3.5 text-bleu/38 text-[0.95rem] leading-[1.85]">
            <p>Management de proximité</p>
            <p>Communication professionnelle</p>
            <p>Relation client</p>
            <p>Organisation du travail</p>
            <p>Accompagnement collectif</p>
          </div>
          <div className="mt-16">
            <Link to="/formations">
              <span className="text-[0.72rem] text-bleu/18 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em] cursor-pointer">
                Voir les formations →
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ─── QUALITÉ & ACCOMPAGNEMENT ─── */}
      <Section bg="gris">
        <div className="md:ml-[8%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Qualité et accompagnement.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Organisme certifié Qualiopi<br />pour les actions de formation.</p>
            <p>Adaptation des formations aux personnes en situation de handicap.</p>
            <p>Accompagnement aux solutions de financement&thinsp;:<br />OPCO, CPF et plan de développement des compétences.</p>
          </div>
          <div className="mt-16">
            <Link to="/qualite">
              <span className="text-[0.72rem] text-bleu/18 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em] cursor-pointer">
                En savoir plus →
              </span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ─── CONTACT DISCRET ─── */}
      <Section>
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Parlons de votre projet.
          </h2>
          <p className="mt-14 text-bleu/32 text-[0.95rem] leading-[1.85]">
            Nous accompagnons les entreprises et les professionnels<br className="hidden md:inline" />
            dans le développement de leurs compétences.
          </p>
          <div className="mt-14">
            <Link to="/contact">
              <span className="text-[0.72rem] text-bleu/18 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em] cursor-pointer">
                Nous contacter →
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
