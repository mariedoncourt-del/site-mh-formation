import Section from "../components/Section";

export default function Approche() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
            Former<br />pour transformer.
          </h1>
        </div>
      </section>

      {/* BLOC 1 — INTENTION */}
      <Section>
        <div className="max-w-[48ch]">
          <p className="text-bleu/55 text-[0.95rem] leading-[1.9]">
            La formation n'a de valeur que si elle transforme les pratiques.
          </p>
          <div className="mt-10 space-y-2 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Nous privilégions&thinsp;:</p>
            <p>— les situations réelles</p>
            <p>— les cas concrets</p>
            <p>— l'application immédiate</p>
          </div>
          <p className="mt-10 text-bleu/45 text-[0.95rem] leading-[1.9]">
            Chaque programme vise un résultat visible sur le terrain.
          </p>
        </div>
      </Section>

      {/* BLOC 2 — MÉTHODE */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Notre méthode.
          </h2>
          <div className="mt-16 md:mt-24 space-y-16 md:space-y-20">
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
                <span className="text-[0.75rem] text-bleu/15 tracking-[0.15em]">{b.num}</span>
                <h3 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15] mt-3">
                  {b.title}
                </h3>
                <p className="text-bleu/45 text-[0.95rem] leading-[1.9] mt-5">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BLOC 3 — QUALITÉ PÉDAGOGIQUE */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Qualité pédagogique.
          </h2>
          <div className="mt-16 md:mt-24 space-y-2 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Chaque action de formation fait l'objet&thinsp;:</p>
            <p>— d'une analyse des besoins</p>
            <p>— d'un suivi pédagogique</p>
            <p>— d'une évaluation des acquis</p>
            <p>— d'une mesure de satisfaction</p>
          </div>
          <p className="mt-10 text-bleu/45 text-[0.95rem] leading-[1.9]">
            Nos contenus sont régulièrement mis à jour afin de garantir leur pertinence.
          </p>
        </div>
      </Section>

      {/* BLOC 4 — HANDICAP */}
      <Section>
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Accessibilité et handicap.
          </h2>
          <div className="mt-16 md:mt-24 space-y-4 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Les formations peuvent être adaptées aux personnes en situation de handicap.</p>
            <p>Un référent handicap est disponible pour étudier les besoins spécifiques et proposer des solutions adaptées.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
