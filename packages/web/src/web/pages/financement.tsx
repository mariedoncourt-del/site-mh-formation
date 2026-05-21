import Section from "../components/Section";

export default function Financement() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[48ch]">
            <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
              Solutions de financement.
            </h1>
            <p className="mt-12 text-bleu/45 text-[0.95rem] leading-[1.9] animate-fade-up animate-delay-1">
              Nous accompagnons les entreprises et les professionnels dans leurs démarches de prise en charge et de financement.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCS FINANCEMENT */}
      <Section>
        <div className="max-w-[48ch] space-y-16 md:space-y-24">
          {[
            {
              title: "OPCO",
              text: "Prise en charge possible selon les critères de votre branche professionnelle.",
            },
            {
              title: "CPF",
              text: "Mobilisation du Compte Personnel de Formation selon les dispositifs en vigueur.",
            },
            {
              title: "Plan de développement des compétences",
              text: "Accompagnement des entreprises dans l'organisation et le financement des actions de formation.",
            },
          ].map((b) => (
            <div key={b.title}>
              <div className="w-8 h-px bg-bleu/6 mb-8" />
              <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
                {b.title}
              </h2>
              <p className="text-bleu/45 text-[0.95rem] leading-[1.9] mt-5">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ACCOMPAGNEMENT ADMINISTRATIF */}
      <Section bg="gris">
        <div className="max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
            Accompagnement administratif.
          </h2>
          <div className="mt-16 md:mt-24 space-y-2 text-bleu/45 text-[0.95rem] leading-[1.9]">
            <p>Documents fournis&thinsp;:</p>
            <p>— Devis</p>
            <p>— Conventions</p>
            <p>— Programmes</p>
            <p>— Convocations</p>
            <p>— Attestations de formation</p>
          </div>
          <p className="mt-10 text-bleu/40 text-[0.95rem] leading-[1.9]">
            Les délais d'accès et modalités administratives sont communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
