import { Link } from "wouter";
import Section from "../components/Section";

export default function Accessibilite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[44ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Accessibilité<br />et handicap.
            </h1>
            <p className="mt-16 text-bleu/35 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-1">
              Nous veillons à rendre nos formations accessibles au plus grand nombre.
            </p>
          </div>
        </div>
      </section>

      {/* ADAPTATION */}
      <Section>
        <div className="max-w-[44ch]">
          <p className="text-bleu/35 text-[0.95rem] leading-[1.85]">
            Les modalités pédagogiques, supports et organisations peuvent être adaptés selon les besoins identifiés.
          </p>
          <div className="mt-14 space-y-2 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>— Analyse des besoins en amont</p>
            <p>— Adaptation des supports</p>
            <p>— Adaptation des modalités pédagogiques</p>
            <p>— Orientation vers partenaires spécialisés si nécessaire</p>
          </div>
        </div>
      </Section>

      {/* RÉFÉRENT */}
      <Section bg="gris">
        <div className="md:ml-[6%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Référent handicap.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Un référent handicap est disponible pour accompagner les stagiaires et étudier les solutions adaptées.</p>
            <p>
              <Link to="/contact">
                <span className="text-bleu/22 hover:text-bleu/40 transition-colors duration-700 cursor-pointer">
                  Nous contacter →
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
