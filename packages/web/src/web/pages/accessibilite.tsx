import Section from "../components/Section";

export default function Accessibilite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.1] animate-fade-up">
            Accessibilité &amp; handicap.
          </h1>
          <p className="mt-10 text-bleu/55 text-base md:text-[1.125rem] max-w-xl leading-[1.8] animate-fade-up animate-delay-1">
            Nous veillons à rendre nos formations accessibles au plus grand nombre.
          </p>
        </div>
      </section>

      {/* ADAPTATION */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14">
          Adaptation des formations.
        </h2>
        <div className="max-w-xl space-y-5 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>
            Les modalités pédagogiques, supports et organisations peuvent être adaptés selon les besoins identifiés.
          </p>
          <div className="mt-8 space-y-4">
            <p><span className="text-bleu/25 mr-4">—</span>Modalités pédagogiques</p>
            <p><span className="text-bleu/25 mr-4">—</span>Supports de formation</p>
            <p><span className="text-bleu/25 mr-4">—</span>Organisation et rythme</p>
          </div>
        </div>
      </Section>

      {/* RÉFÉRENT */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-10">
          Référent handicap.
        </h2>
        <div className="max-w-xl space-y-5 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>
            Un référent handicap est disponible pour accompagner les stagiaires et étudier les solutions adaptées.
          </p>
          <p className="mt-8">
            <a
              href="mailto:contact@mhformation-institut.org"
              className="text-bleu/50 hover:text-bleu border-b border-bleu/15 hover:border-bleu/40 pb-1 transition-all duration-300 tracking-wide"
            >
              Contact sur demande →
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
