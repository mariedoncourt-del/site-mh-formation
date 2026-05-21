import Section from "../components/Section";

export default function Financement() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-44 pb-20 md:pt-56 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.1] animate-fade-up">
            Solutions de financement.
          </h1>
          <p className="mt-10 text-bleu/55 text-base md:text-[1.125rem] max-w-xl leading-[1.8] animate-fade-up animate-delay-1">
            Nous accompagnons les entreprises et les professionnels dans leurs démarches de prise en charge et de financement.
          </p>
        </div>
      </section>

      {/* BLOCS FINANCEMENT */}
      <Section>
        <div className="space-y-16 md:space-y-24">
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
            <div key={b.title} className="border-t border-border pt-10 md:pt-12">
              <h2 className="font-serif text-bleu text-2xl md:text-3xl font-light mb-5">
                {b.title}
              </h2>
              <p className="text-bleu/55 text-base md:text-[1.125rem] max-w-lg leading-[1.8]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION ADMINISTRATIVE */}
      <Section bg="gris">
        <h2 className="font-serif text-bleu text-3xl md:text-4xl font-light mb-14">
          Accompagnement administratif.
        </h2>
        <div className="max-w-xl space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
          <p>Documents fournis&nbsp;:</p>
          {["Devis", "Conventions", "Programmes", "Convocations", "Attestations de formation"].map((d) => (
            <p key={d}>
              <span className="text-bleu/25 mr-4">—</span>
              {d}
            </p>
          ))}
          <p className="mt-10">
            Les délais d'accès et modalités administratives sont communiqués avant toute inscription.
          </p>
        </div>
      </Section>
    </main>
  );
}
