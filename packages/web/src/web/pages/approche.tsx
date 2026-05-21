import Section from "../components/Section";

export default function Approche() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
            <h1 className="font-serif text-bleu text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.05] animate-fade-up">
              Former<br />pour transformer.
            </h1>
            <div className="animate-fade-up animate-delay-2 md:pt-6">
              <p className="text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
                La formation n'a de valeur que si elle transforme les pratiques.
              </p>
              <div className="mt-10 space-y-3 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
                <p>Nous privilégions&nbsp;:</p>
                <p><span className="text-bleu/25 mr-4">—</span>les situations réelles</p>
                <p><span className="text-bleu/25 mr-4">—</span>les cas concrets</p>
                <p><span className="text-bleu/25 mr-4">—</span>l'application immédiate</p>
              </div>
              <p className="mt-10 text-bleu/50 text-base md:text-[1.125rem] leading-[1.8]">
                Chaque programme vise un résultat visible sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MÉTHODE */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-16 md:mb-24">
          Notre méthode.
        </h2>
        <div className="space-y-16 md:space-y-24">
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
          ].map((block) => (
            <div key={block.num} className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-10">
              <span className="font-serif text-bleu/15 text-xl tracking-wider">{block.num}</span>
              <div>
                <h3 className="font-serif text-bleu text-2xl md:text-3xl font-light mb-5">
                  {block.title}
                </h3>
                <p className="text-bleu/55 text-base md:text-[1.125rem] max-w-lg leading-[1.8]">
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3 — QUALITÉ PÉDAGOGIQUE */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-12">
          Qualité pédagogique.
        </h2>
        <div className="max-w-xl space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>Chaque action de formation fait l'objet&nbsp;:</p>
          <p><span className="text-bleu/25 mr-4">—</span>d'une analyse des besoins</p>
          <p><span className="text-bleu/25 mr-4">—</span>d'un suivi pédagogique</p>
          <p><span className="text-bleu/25 mr-4">—</span>d'une évaluation des acquis</p>
          <p><span className="text-bleu/25 mr-4">—</span>d'une mesure de satisfaction</p>
          <p className="mt-10">
            Nos contenus sont régulièrement mis à jour afin de garantir leur pertinence et leur efficacité opérationnelle.
          </p>
        </div>
      </Section>

      {/* SECTION 4 — DOCUMENTS */}
      <Section>
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-12">
          Documents remis.
        </h2>
        <div className="max-w-lg space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          {["Programme", "Convention", "Feuilles d'émargement", "Attestations de formation"].map((d) => (
            <p key={d}>
              <span className="text-bleu/25 mr-4">—</span>
              {d}
            </p>
          ))}
        </div>
      </Section>

      {/* SECTION 5 — HANDICAP */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-10">
          Accessibilité &amp; handicap.
        </h2>
        <div className="max-w-xl space-y-5 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>Les formations peuvent être adaptées aux personnes en situation de handicap.</p>
          <p>Un référent handicap est disponible pour étudier les besoins spécifiques et proposer des solutions adaptées.</p>
        </div>
      </Section>
    </main>
  );
}
