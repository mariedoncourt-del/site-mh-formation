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
      <section className="pt-44 pb-10 md:pt-56 md:pb-16">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
          <h1 className="font-serif text-bleu text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.05] animate-fade-up">
            Parlons de<br />votre projet.
          </h1>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Coordonnées */}
          <div>
            <div className="space-y-4 text-bleu/55 text-base md:text-[1.125rem] leading-[1.8]">
              <p className="text-bleu font-serif text-xl">MH Formation</p>
              <p>Formation professionnelle continue</p>
              <div className="mt-8 space-y-2">
                <p>20 Place Edmond Canet</p>
                <p>81000 Albi</p>
              </div>
              <p className="mt-8">
                <a
                  href="mailto:contact@mhformation-institut.org"
                  className="hover:text-bleu transition-colors duration-300 border-b border-bleu/15 hover:border-bleu/40 pb-1"
                >
                  contact@mhformation-institut.org
                </a>
              </p>
            </div>
          </div>

          {/* Right — Formulaire */}
          <div>
            {submitted ? (
              <div className="animate-fade-up pt-4">
                <p className="font-serif text-bleu text-2xl md:text-3xl font-light">
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
                    className="w-full bg-transparent border-b border-bleu/15 focus:border-bleu/40 text-bleu text-base py-4 outline-none transition-colors duration-[400ms] placeholder:text-bleu/25 placeholder:tracking-wide"
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
                    className="w-full bg-transparent border-b border-bleu/15 focus:border-bleu/40 text-bleu text-base py-4 outline-none transition-colors duration-[400ms] placeholder:text-bleu/25 placeholder:tracking-wide"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full bg-transparent border-b border-bleu/15 focus:border-bleu/40 text-bleu text-base py-4 outline-none transition-colors duration-[400ms] placeholder:text-bleu/25 placeholder:tracking-wide"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-bleu/15 focus:border-bleu/40 text-bleu text-base py-4 outline-none transition-colors duration-[400ms] resize-none placeholder:text-bleu/25 placeholder:tracking-wide"
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm border border-bleu/25 text-bleu/80 px-7 py-3.5 tracking-wide transition-all duration-[400ms] hover:border-bleu/50 hover:text-bleu"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Ligne horizontale fine */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        <div className="border-t border-border" />
      </div>
    </main>
  );
}
