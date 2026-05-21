import Section from "../components/Section";

export default function Accessibilite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[48ch]">
            <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Accessibilité<br />et handicap.
            </h1>
            <p className="mt-12 text-bleu/45 text-[0.95rem] leading-[1.9] animate-fade-up animate-delay-1">
              Nous veillons à rendre nos formations accessibles au plus grand nombre.
            </p>
          </div>
        </div>
      </section>

      {/* ADAPTATION */}
      <Section>
        <div className="max-w-[48ch]">
          <p className="text-bleu/45 text-[0.95rem] leading-[1.9]">
            Les modalités pédagogiques, supports et organisations peuvent être adaptés selon les besoins identifiés.
          </p>
          <div className="mt-10 space-y-2 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>— Modalités d'accueil</p>
            <p>— Analyse des besoins en amont</p>
            <p>— Adaptation des supports</p>
            <p>— Orientation vers partenaires spécialisés si nécessaire</p>
          </div>
        </div>
      </Section>

      {/* RÉFÉRENT */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Référent handicap.
          </h2>
          <div className="mt-16 md:mt-24 space-y-4 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Un référent handicap est disponible pour accompagner les stagiaires et étudier les solutions adaptées.</p>
            <p className="mt-6">
              <a
                href="mailto:contact@mhformation-institut.org"
                className="text-bleu/35 hover:text-bleu/55 transition-colors duration-500 border-b border-bleu/8 hover:border-bleu/20 pb-px"
              >
                Contact sur demande
              </a>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
