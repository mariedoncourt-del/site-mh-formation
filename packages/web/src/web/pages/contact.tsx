import { useState } from "react";
import Section from "../components/Section";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* HERO */}
      <section className="pt-48 pb-8 md:pt-60 md:pb-12">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.025em] animate-fade-up">
            Parlons de<br />votre projet.
          </h1>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-24 md:gap-36">
          {/* Gauche — Coordonnées */}
          <div>
            <span className="font-serif text-bleu/40 text-[0.95rem] font-light">MH Formation</span>
            <p className="text-[0.72rem] text-bleu/18 mt-1 tracking-[0.05em]">
              Formation professionnelle continue
            </p>

            <div className="mt-16 text-bleu/30 text-[0.95rem] leading-[2] space-y-0">
              <p>20 Place Edmond Canet</p>
              <p>81000 Albi</p>
            </div>

            <a
              href="mailto:contact@mhformation-institut.org"
              className="block mt-8 text-bleu/30 text-[0.95rem] hover:text-bleu/45 transition-colors duration-700"
            >
              contact@mhformation-institut.org
            </a>
          </div>

          {/* Droite — Formulaire */}
          <div>
            {submitted ? (
              <div className="animate-fade-up pt-2">
                <p className="font-serif text-bleu/45 text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.2]">
                  Nous reviendrons vers vous rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div>
                  <label htmlFor="nom" className="sr-only">Nom</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Nom"
                    className="w-full bg-transparent border-b border-bleu/[0.02] focus:border-bleu/8 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-bleu/[0.02] focus:border-bleu/8 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-700"
                  />
                </div>
                <div>
                  <label htmlFor="entreprise" className="sr-only">Entreprise</label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Entreprise"
                    className="w-full bg-transparent border-b border-bleu/[0.02] focus:border-bleu/8 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Votre besoin"
                    className="w-full bg-transparent border-b border-bleu/[0.02] focus:border-bleu/8 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-700 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-transparent border-none p-0 text-[0.72rem] text-bleu/22 hover:text-bleu/40 tracking-[0.05em] transition-colors duration-700 cursor-pointer font-normal"
                >
                  Envoyer →
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
