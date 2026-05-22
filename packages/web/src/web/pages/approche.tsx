import Section from "../components/Section";

export default function Approche() {
  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Méthodes pédagogiques.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            La formation professionnelle doit se traduire par une autonomie pratique des stagiaires au poste de travail. Nous organisons l'apprentissage autour de cas réels.
          </p>
        </div>
      </div>

      {/* Étapes */}
      <div className="py-20 max-w-4xl mx-auto px-6 space-y-16">
        <div className="space-y-8 divide-y divide-slate-200">
          {[
            {
              num: "01",
              title: "Des formations courtes",
              text: "Des modules d'intervention ciblés conçus pour limiter la durée d'absence du collaborateur à son poste de travail.",
            },
            {
              num: "02",
              title: "Une pédagogie participative",
              text: "Mises en situation sur cas réels, exercices d'application directe et partage des retours d'expérience entre apprenants.",
            },
            {
              num: "03",
              title: "Un accompagnement humain",
              text: "Sessions animées en présentiel au sein de nos locaux à Albi, ou directement au sein de l'entreprise selon les contraintes géographiques.",
            },
          ].map((step) => (
            <div key={step.num} className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 pl-4 relative">
                <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
                <span className="text-[10px] font-mono text-slate-300 block">{step.num} /</span>
                <h3 className="text-base font-serif font-medium text-slate-900 mt-1">{step.title}</h3>
              </div>
              <div className="md:col-span-8 text-sm text-slate-600 font-light leading-relaxed">
                {step.text}
              </div>
            </div>
          ))}
        </div>

        {/* Suivi administratif */}
        <div className="bg-slate-50 p-8 space-y-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            Suivi administratif et réglementaire :
          </p>
          <ul className="text-xs md:text-sm text-slate-600 font-light space-y-2.5 pl-4 border-l border-slate-200">
            <li>— Fiches de positionnement initial de l'apprenant</li>
            <li>— Feuilles d'émargement quotidiennes par demi-journée</li>
            <li>— Évaluation individuelle des acquis pédagogiques en fin de session</li>
            <li>— Questionnaires de satisfaction stagiaires et commanditaires</li>
          </ul>
        </div>

        {/* Handicap */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif text-slate-900 tracking-tight">Adaptabilité aux stagiaires</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Les formations dispensées par MH Formation peuvent être adaptées aux personnes en situation de handicap. Un référent handicap est disponible pour étudier les besoins spécifiques et proposer des aménagements ou des solutions de réorientation si nécessaire.
          </p>
        </div>
      </div>
    </main>
  );
}
