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
      <section className="pt-40 pb-8 md:pt-52 md:pb-12">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(3rem,8vw,6rem)] font-light leading-[1.02] tracking-[-0.02em] animate-fade-up">
            Parlons de<br />votre projet.
          </h1>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28">
          {/* Gauche — Coordonnées */}
          <div className="max-w-[48ch]">
            <span className="font-serif text-bleu text-[1.05rem] font-light">MH Formation</span>
            <p className="text-[0.75rem] text-bleu/30 mt-1 tracking-[0.06em]">
              Formation professionnelle continue
            </p>

            <div className="mt-12 text-bleu/40 text-[0.95rem] leading-[1.9] space-y-0.5">
              <p>20 Place Edmond Canet</p>
              <p>81000 Albi</p>
            </div>

            <a
              href="mailto:contact@mhformation-institut.org"
              className="block mt-6 text-bleu/40 text-[0.95rem] hover:text-bleu/60 transition-colors duration-500"
            >
              contact@mhformation-institut.org
            </a>

            <p className="mt-6 text-bleu/30 text-[0.95rem]">
              mhformation-institut.org
            </p>
          </div>

          {/* Droite — Formulaire */}
          <div>
            {submitted ? (
              <div className="animate-fade-up pt-2">
                <p className="font-serif text-bleu text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.15]">
                  Nous reviendrons vers vous rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="nom" className="sr-only">Nom</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Nom"
                    className="w-full bg-transparent border-b border-bleu/8 focus:border-bleu/25 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
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
                    className="w-full bg-transparent border-b border-bleu/8 focus:border-bleu/25 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full bg-transparent border-b border-bleu/8 focus:border-bleu/25 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-bleu/8 focus:border-bleu/25 text-bleu text-[0.95rem] py-4 outline-none transition-colors duration-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[0.75rem] text-bleu/40 hover:text-bleu/65 tracking-[0.08em] transition-colors duration-500 border border-bleu/10 hover:border-bleu/25 px-5 py-2.5"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Ligne horizontale courte */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        <div className="w-10 h-px bg-bleu/5" />
      </div>
    </main>
  );
}
