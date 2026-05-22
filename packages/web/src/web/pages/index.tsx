import { Link } from "wouter";
import Section from "../components/Section";

export default function Accueil() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <div className="py-40 md:py-52 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-10 space-y-12 relative pl-8">
              <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-slate-200" />

              <span className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium">
                Formation professionnelle continue — Secteurs industriel et tertiaire
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-light text-slate-900 tracking-tight leading-tight">
                Former moins.<br />Transformer davantage.
              </h1>

              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed max-w-xl">
                Des formations courtes conçues pour modifier les pratiques professionnelles.
              </p>

              <div className="pt-2">
                <Link to="/contact">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/15 pb-0.5 cursor-pointer">
                    Parler de votre projet
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── NOTRE APPROCHE ─── */}
      <Section bg="slate" bordered>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-slate-900 tracking-tight">
              Notre approche
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-sm md:text-base text-slate-600 font-light leading-relaxed">
            <p>
              La formation professionnelle n'a de valeur que si elle se traduit par des pratiques réelles au sein des équipes. Trop de programmes s'en tiennent à des exposés théoriques difficiles à transposer.
            </p>
            <p>
              Notre démarche repose sur des apports ciblés et des temps de mise en pratique immédiate sur les dossiers de l'entreprise. Chaque session est dimensionnée pour répondre à un besoin d'efficacité opérationnelle direct.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── OBJECTIFS D'IMPACT ─── */}
      <Section>
        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 pl-8 relative">
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
              <h2 className="text-2xl md:text-3xl font-serif font-light text-slate-900 tracking-tight">
                Objectifs d'impact
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-slate-600 font-light leading-relaxed pl-8">
            {[
              {
                num: "01",
                title: "Situations de travail réelles",
                text: "Les exercices s'appuient sur l'activité quotidienne et les outils réels des stagiaires afin d'éviter la déperdition des acquis.",
              },
              {
                num: "02",
                title: "Formats opérationnels courts",
                text: "Des modules condensés conçus pour s'intégrer dans le planning de production sans désorganiser le service.",
              },
              {
                num: "03",
                title: "Mesure d'impact direct",
                text: "Un bilan des acquis est effectué en fin de session pour évaluer la capacité d'autonomie opérationnelle du collaborateur.",
              },
            ].map((item) => (
              <div key={item.num} className="space-y-3">
                <span className="text-[10px] font-mono text-slate-300">{item.num} /</span>
                <h3 className="text-base font-serif text-slate-900 font-medium">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── PROGRAMMES DE FORMATION ─── */}
      <Section>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pl-8 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
            <h2 className="text-2xl md:text-3xl font-serif font-light text-slate-900 tracking-tight">
              Programmes de formation
            </h2>
            <Link to="/formations">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/10 pb-0.5 self-start md:self-auto cursor-pointer">
                Consulter les parcours
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 pl-8">
            {[
              {
                title: "Encadrement et management de proximité",
                text: "Suivi du travail au quotidien, répartition des tâches, gestion des consignes et accompagnement des équipes de production.",
              },
              {
                title: "Relations et communication en équipe",
                text: "Fiabiliser la transmission des consignes de travail, clarifier les échanges et prévenir les frictions en atelier ou en service.",
              },
              {
                title: "Accueil physique et téléphonique",
                text: "Réflexes d'accueil, traitement des demandes usagers, gestion des réclamations et des situations d'insatisfaction client.",
              },
              {
                title: "Gestion du temps et des priorités",
                text: "Planifier son planning d'activité, arbitrer sa charge de travail de manière rationnelle et organiser les imprévus opérationnels.",
              },
              {
                title: "Coordination et travail d'équipe",
                text: "S'accorder sur les méthodes de production, harmoniser les repères de travail et clarifier les circuits de validation internes.",
              },
            ].map((f) => (
              <div key={f.title} className="space-y-2">
                <h3 className="text-base font-serif font-medium text-slate-900">{f.title}</h3>
                <p className="text-[13px] md:text-sm text-slate-600 font-light leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── ORGANISATION ET CONFORMITÉ ─── */}
      <Section bg="slate" bordered>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 pl-8 relative">
            <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-slate-200" />
            <h2 className="text-2xl md:text-3xl font-serif font-light text-slate-900 tracking-tight leading-tight">
              Organisation et conformité
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              MH Formation s'inscrit dans une démarche qualité conforme au Référentiel National Qualité. Ce cadre réglementaire structure l'ensemble de nos processus, de l'entretien préalable de positionnement jusqu'au bilan des acquis.
            </p>
            <div className="pt-2">
              <Link to="/qualite">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/10 pb-0.5 cursor-pointer">
                  Consulter nos engagements qualité
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 bg-white p-8 space-y-6 border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="block text-lg font-serif text-slate-900 font-light">Analyse préalable</span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium">Vérification des prérequis et des besoins</span>
              </div>
              <div className="space-y-1">
                <span className="block text-lg font-serif text-slate-900 font-light">Validation</span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-400 font-medium">Suivi d'assiduité et d'évaluation des acquis</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── CONTACT ─── */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-serif font-light text-slate-900 tracking-tight">
            Une question administrative ou de financement ?
          </h3>
          <p className="text-sm text-slate-600 font-light max-w-xl mx-auto leading-relaxed">
            Notre équipe analyse la faisabilité de votre projet professionnel auprès des organismes de financement (OPCO, CPF, branches sectorielles).
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-900 font-semibold border-b border-slate-900/15 pb-0.5 cursor-pointer">
                Faire une demande d'étude
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
