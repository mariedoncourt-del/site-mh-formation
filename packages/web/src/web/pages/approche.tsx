import Section from "../components/Section";

export default function Approche() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
            Former<br />pour transformer.
          </h1>
        </div>
      </section>

      {/* INTENTION */}
      <Section>
        <div className="max-w-[44ch]">
          <p className="text-bleu/42 text-[0.95rem] leading-[1.85]">
            La formation n'a de valeur que si elle transforme les pratiques.
          </p>
          <div className="mt-14 space-y-2 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Nous privilégions&thinsp;:</p>
            <p>— les situations réelles</p>
            <p>— les cas concrets</p>
            <p>— l'application immédiate</p>
          </div>
          <p className="mt-14 text-bleu/35 text-[0.95rem] leading-[1.85]">
            Chaque programme vise un résultat visible sur le terrain.
          </p>
        </div>
      </Section>

      {/* MÉTHODE */}
      <Section>
        <div className="md:ml-[10%] max-w-[44ch]">
          <div className="space-y-24 md:space-y-32">
            {[
              {
                num: "01",
                title: "Des formations courtes",
                text: "Des contenus ciblés et opérationnels conçus pour être appliqués immédiatement.",
              },
              {
                num: "02",
                title: "Une pédagogie active",
                text: "Échanges, mises en situation, participation et cas pratiques.",
              },
              {
                num: "03",
                title: "Un accompagnement humain",
                text: "Présentiel, distanciel ou hybride selon les besoins des entreprises et des professionnels.",
              },
            ].map((b) => (
              <div key={b.num}>
                <span className="text-[0.72rem] text-bleu/10 tracking-[0.15em]">{b.num}</span>
                <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2] mt-4">
                  {b.title}
                </h2>
                <p className="text-bleu/35 text-[0.95rem] leading-[1.85] mt-7">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* QUALITÉ PÉDAGOGIQUE */}
      <Section bg="gris">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Qualité pédagogique.
          </h2>
          <div className="mt-20 md:mt-28 space-y-2 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Chaque action de formation fait l'objet&thinsp;:</p>
            <p>— d'une analyse des besoins</p>
            <p>— d'un suivi pédagogique</p>
            <p>— d'une évaluation des acquis</p>
            <p>— d'une mesure de satisfaction</p>
          </div>
        </div>
      </Section>

      {/* HANDICAP */}
      <Section>
        <div className="md:ml-[6%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Accessibilité et handicap.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Les formations peuvent être adaptées aux personnes en situation de handicap.</p>
            <p>Un référent handicap est disponible pour étudier les besoins spécifiques et proposer des solutions adaptées.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
