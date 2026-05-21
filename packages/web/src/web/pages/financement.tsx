import Section from "../components/Section";

export default function Financement() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[44ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Solutions de financement.
            </h1>
            <p className="mt-16 text-bleu/35 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-1">
              Nous accompagnons les entreprises et les professionnels dans leurs démarches de prise en charge et de financement.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCS FINANCEMENT */}
      <Section>
        <div className="max-w-[44ch] space-y-24 md:space-y-32">
          {[
            {
              title: "OPCO",
              text: "Prise en charge possible selon les critères de votre branche professionnelle.",
              offset: "",
            },
            {
              title: "CPF",
              text: "Mobilisation du Compte Personnel de Formation selon les dispositifs en vigueur.",
              offset: "md:ml-[8%]",
            },
            {
              title: "Plan de développement des compétences",
              text: "Accompagnement des entreprises dans l'organisation et le financement des actions de formation.",
              offset: "",
            },
          ].map((b) => (
            <div key={b.title} className={b.offset}>
              <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
                {b.title}
              </h2>
              <p className="text-bleu/35 text-[0.95rem] leading-[1.85] mt-7">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ACCOMPAGNEMENT ADMINISTRATIF */}
      <Section bg="gris">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Accompagnement administratif.
          </h2>
          <div className="mt-20 md:mt-28 space-y-2 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>Documents fournis&thinsp;:</p>
            <p>— devis</p>
            <p>— conventions</p>
            <p>— programmes</p>
            <p>— convocations</p>
            <p>— attestations de formation</p>
          </div>
          <p className="mt-14 text-bleu/30 text-[0.95rem] leading-[1.85]">
            Les délais d'accès et modalités administratives sont communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
