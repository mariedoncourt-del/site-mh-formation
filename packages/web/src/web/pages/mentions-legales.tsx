export default function MentionsLegales() {
  return (
    <main>
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Mentions légales.
          </h1>
        </div>
      </div>

      <div className="py-20 max-w-3xl mx-auto px-6 space-y-12 text-sm text-slate-600 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Éditeur du site</h2>
          <p>MH Formation</p>
          <p>20 Place Edmond Canet, 81000 Albi</p>
          <p>SIRET : 939 035 721 00017</p>
          <p>Email : contact@mhformation-institut.org</p>
          <p>Responsable de la publication : MH Formation</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Hébergement</h2>
          <p>Ce site est hébergé par Runable.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, structure) est la propriété de MH Formation ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Limitation de responsabilité</h2>
          <p>
            MH Formation s'efforce de fournir des informations aussi précises que possible. Toutefois, l'organisme ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
        </section>
      </div>
    </main>
  );
}
