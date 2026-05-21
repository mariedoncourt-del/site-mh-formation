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
      <section className="pt-44 pb-8 md:pt-56 md:pb-12">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
            Parlons de<br />votre projet.
          </h1>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {/* Gauche — Coordonnées */}
          <div className="max-w-[48ch]">
            <span className="font-serif text-bleu text-[1rem] font-light">MH Formation</span>
            <p className="text-[0.75rem] text-bleu/25 mt-1.5 tracking-[0.06em]">
              Formation professionnelle continue
            </p>

            <div className="mt-14 text-bleu/38 text-[0.95rem] leading-[1.9] space-y-0.5">
              <p>Place Edmond Canet</p>
              <p>81000 Albi</p>
            </div>

            <a
              href="mailto:contact@mhformation-institut.org"
              className="block mt-7 text-bleu/38 text-[0.95rem] hover:text-bleu/55 transition-colors duration-500"
            >
              contact@mhformation-institut.org
            </a>

            <p className="mt-3 text-bleu/25 text-[0.95rem]">
              mhformation-institut.org
            </p>
          </div>

          {/* Droite — Formulaire */}
          <div>
            {submitted ? (
              <div className="animate-fade-up pt-2">
                <p className="font-serif text-bleu text-[clamp(1.5rem,3.2vw,2.2rem)] font-light leading-[1.15]">
                  Nous reviendrons vers vous rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label htmlFor="nom" className="sr-only">Nom</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Nom"
                    className="w-full bg-transparent border-b border-bleu/6 focus:border-bleu/20 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
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
                    className="w-full bg-transparent border-b border-bleu/6 focus:border-bleu/20 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full bg-transparent border-b border-bleu/6 focus:border-bleu/20 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-bleu/6 focus:border-bleu/20 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[0.75rem] text-bleu/30 hover:text-bleu/50 tracking-[0.08em] transition-colors duration-500 border-b border-bleu/10 hover:border-bleu/20 pb-px"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
