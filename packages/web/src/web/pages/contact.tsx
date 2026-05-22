import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Header */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Parlons de votre projet.
          </h1>
          <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
            Pour toute demande administrative, de programme sur-mesure ou de tarification de nos sessions de formation professionnelle continue à Albi.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="py-20 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Coordonnées */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium block">Coordonnées</span>
            <div className="text-sm text-slate-600 font-light leading-relaxed space-y-1">
              <p className="text-slate-900 font-medium">MH Formation</p>
              <p>20 Place Edmond Canet</p>
              <p>81000 Albi</p>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium block">Email</span>
            <a
              href="mailto:contact@mhformation-institut.org"
              className="text-sm text-slate-600 font-light hover:text-slate-900 transition-colors duration-300"
            >
              contact@mhformation-institut.org
            </a>
          </div>
          <div className="pt-4 text-[11px] text-slate-400 font-light leading-relaxed">
            <p>SIRET 939 035 721 00017</p>
            <p className="mt-1">Organisme de formation professionnelle continue</p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-7 lg:col-start-6">
          {submitted ? (
            <div className="route-fade py-12">
              <h2 className="text-2xl font-serif font-light text-slate-900 tracking-tight">
                Message envoyé.
              </h2>
              <p className="text-sm text-slate-600 font-light mt-4 leading-relaxed">
                Nous reviendrons vers vous rapidement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nom" className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2">
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-slate-200 focus:border-slate-900 text-sm font-light text-slate-900 py-2 outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-slate-200 focus:border-slate-900 text-sm font-light text-slate-900 py-2 outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="telephone" className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2">
                  Téléphone de contact
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-slate-200 focus:border-slate-900 text-sm font-light text-slate-900 py-2 outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2">
                  Description de votre besoin
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 focus:border-slate-900 text-sm font-light text-slate-900 py-2 outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-900 border-b border-slate-900/20 hover:border-slate-900 transition-colors duration-300 pb-0.5 bg-transparent cursor-pointer"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
