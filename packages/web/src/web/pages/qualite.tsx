import { Link } from "wouter";
import Section from "../components/Section";

/* ─── Indicateurs administrables ─── */
const indicateurs = [
  { label: "Taux de satisfaction globale", value: "Données en cours de consolidation" },
  { label: "Nombre de stagiaires formés", value: "Données en cours de consolidation" },
  { label: "Taux de recommandation", value: "Données en cours de consolidation" },
  { label: "Taux d'atteinte des objectifs pédagogiques", value: "Données en cours de consolidation" },
  { label: "Nombre d'heures de formation réalisées", value: "Données en cours de consolidation" },
];

const documents = [
  { label: "Certificat Qualiopi", href: "#" },
  { label: "Règlement intérieur", href: "#" },
  { label: "Conditions générales de vente", href: "#" },
  { label: "Livret d'accueil", href: "#" },
  { label: "Procédure handicap", href: "#" },
  { label: "Procédure de réclamation", href: "#" },
];

export default function Qualite() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-20 md:pt-60 md:pb-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <div className="max-w-[44ch]">
            <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
              Engagement qualité.
            </h1>
            <p className="mt-16 text-bleu/35 text-[0.95rem] leading-[1.85] animate-fade-up animate-delay-1">
              MH Formation est certifié Qualiopi au titre de la catégorie «&thinsp;actions de formation&thinsp;».
            </p>
          </div>
        </div>
      </section>

      {/* PÉRIMÈTRE DE CERTIFICATION */}
      <Section>
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Certification Qualiopi.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>
              La certification qualité a été délivrée au titre de la catégorie d'action suivante&thinsp;:
              actions de formation.
            </p>
            <div className="space-y-2">
              <p className="text-[0.72rem] text-bleu/18 tracking-[0.07em]">Organisme certificateur</p>
              <p>AFNOR Certification</p>
            </div>
            <p>
              Cette certification atteste de la qualité du processus mis en œuvre
              par MH Formation et contribuant au développement des compétences.
            </p>
          </div>
        </div>
      </Section>

      {/* ENGAGEMENTS — 7 critères Qualiopi */}
      <Section bg="gris">
        <div className="md:ml-[6%] max-w-[48ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Nos engagements.
          </h2>
          <div className="mt-20 md:mt-28 space-y-20 md:space-y-24">
            {[
              {
                criterion: "Information du public",
                text: "Communication claire et accessible sur les prestations, les résultats et les indicateurs de performance.",
              },
              {
                criterion: "Identification des objectifs",
                text: "Analyse des besoins en amont, définition des objectifs pédagogiques et adaptation des contenus au contexte professionnel.",
              },
              {
                criterion: "Adaptation des prestations",
                text: "Programmes sur mesure tenant compte du profil des stagiaires, des prérequis et des conditions d'accès.",
              },
              {
                criterion: "Moyens pédagogiques",
                text: "Ressources adaptées, modalités pédagogiques variées et conditions matérielles favorisant l'apprentissage.",
              },
              {
                criterion: "Qualification des intervenants",
                text: "Compétences et développement professionnel continu des formateurs.",
              },
              {
                criterion: "Inscription dans l'environnement",
                text: "Veille réglementaire, partenariats professionnels et ancrage dans les réalités des secteurs d'activité.",
              },
              {
                criterion: "Amélioration continue",
                text: "Recueil systématique des appréciations, traitement des réclamations et démarche d'amélioration des prestations.",
              },
            ].map((item) => (
              <div key={item.criterion}>
                <p className="text-[0.72rem] text-bleu/15 tracking-[0.07em]">
                  {item.criterion}
                </p>
                <p className="text-bleu/38 text-[0.95rem] leading-[1.85] mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INDICATEURS */}
      <Section>
        <div className="md:ml-[8%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Indicateurs qualité.
          </h2>
          <p className="mt-10 text-bleu/22 text-[0.72rem] tracking-[0.07em]">
            Mis à jour annuellement
          </p>
          <div className="mt-16 md:mt-24 space-y-14">
            {indicateurs.map((ind) => (
              <div key={ind.label}>
                <p className="text-[0.72rem] text-bleu/18 tracking-[0.07em]">{ind.label}</p>
                <p className="text-bleu/40 text-[0.95rem] leading-[1.85] mt-2">{ind.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RÉCLAMATION */}
      <Section bg="gris">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Procédure de réclamation.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>
              Toute réclamation peut être adressée par courrier ou par email
              à l'adresse suivante&thinsp;:
            </p>
            <p>
              <a
                href="mailto:contact@mhformation-institut.org"
                className="text-bleu/30 hover:text-bleu/45 transition-colors duration-700"
              >
                contact@mhformation-institut.org
              </a>
            </p>
            <p>
              Chaque réclamation fait l'objet d'un accusé de réception sous 48 heures
              et d'un traitement dans un délai de 15 jours ouvrés.
            </p>
            <p>
              Les réclamations sont enregistrées, analysées et contribuent
              à l'amélioration continue de nos prestations.
            </p>
          </div>
        </div>
      </Section>

      {/* DOCUMENTS */}
      <Section id="documents">
        <div className="md:ml-[4%] max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Documents utiles.
          </h2>
          <div className="mt-20 md:mt-28">
            {documents.map((doc) => (
              <div key={doc.label} className="flex items-center justify-between py-6 border-b border-bleu/[0.015]">
                <span className="text-bleu/38 text-[0.95rem]">{doc.label}</span>
                <a
                  href={doc.href}
                  className="text-[0.72rem] text-bleu/15 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em]"
                >
                  Télécharger →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DÉLAIS D'ACCÈS */}
      <Section bg="gris">
        <div className="max-w-[44ch]">
          <h2 className="font-serif text-bleu text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
            Délais d'accès.
          </h2>
          <div className="mt-20 md:mt-28 space-y-6 text-bleu/35 text-[0.95rem] leading-[1.85]">
            <p>
              Les délais d'accès varient selon la nature de la formation,
              les modalités de financement et la disponibilité des intervenants.
            </p>
            <p>
              En règle générale, un délai de 14 jours ouvrés minimum
              est nécessaire entre la demande et le début de la prestation.
            </p>
            <p>
              Les conditions précises sont communiquées lors de la phase
              d'analyse des besoins.
            </p>
          </div>
          <div className="mt-16">
            <Link to="/contact">
              <span className="text-[0.72rem] text-bleu/18 hover:text-bleu/35 transition-colors duration-700 tracking-[0.05em] cursor-pointer">
                Nous contacter pour en savoir plus →
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
