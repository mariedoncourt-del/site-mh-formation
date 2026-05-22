import { Link } from "wouter";

export default function Accessibilite() {
  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Accessibilité & handicap.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            Nous veillons à rendre nos formations accessibles au plus grand nombre. Les modalités pédagogiques, les supports de cours et l'organisation matérielle des sessions peuvent être adaptés selon les besoins identifiés.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="py-20 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6 text-sm text-slate-600 font-light leading-relaxed">
          <h2 className="text-base font-serif text-slate-900 font-medium">Aménagement des locaux & supports</h2>
          <p>
            Notre démarche de prise en compte du handicap se traduit par des dispositions concrètes :
          </p>
          <ul className="space-y-3.5 pl-4 border-l border-slate-200 text-slate-600/90">
            <li>— analyse de positionnement personnalisée en amont de toute inscription</li>
            <li>— adaptation textuelle et matérielle des supports pédagogiques de cours</li>
            <li>— aménagement raisonné des modalités d'apprentissage (rythme et horaires)</li>
            <li>— orientation directe vers nos partenaires et relais spécialisés si nécessaire</li>
          </ul>
        </div>
        <div className="md:col-span-5 bg-slate-50/70 p-8 space-y-5">
          <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">Référent handicap</h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            Notre interlocuteur dédié au sein de l'organisme est à votre entière disposition pour évaluer, concevoir et organiser l'adaptation de votre session de formation :
          </p>
          <div className="pt-4 border-t border-slate-200/40 space-y-2 text-xs text-slate-800 font-medium">
            <span className="block">MH Formation — Service handicap</span>
            <a href="mailto:contact@mhformation-institut.org" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300">
              contact@mhformation-institut.org
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
