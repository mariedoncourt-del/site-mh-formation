export default function Confidentialite() {
  return (
    <main>
      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">
            Politique de confidentialité.
          </h1>
        </div>
      </div>

      <div className="py-20 max-w-3xl mx-auto px-6 space-y-12 text-sm text-slate-600 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Responsable du traitement</h2>
          <p>MH Formation — 20 Place Edmond Canet, 81000 Albi</p>
          <p>Email : contact@mhformation-institut.org</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Données collectées</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact (nom, email, entreprise, message) sont utilisées exclusivement pour répondre à votre demande.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Finalité et conservation</h2>
          <p>
            Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact. Elles ne sont ni cédées ni transmises à des tiers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à l'adresse : contact@mhformation-institut.org
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-serif text-slate-900 font-medium">Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie de suivi ou publicitaire. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
          </p>
        </section>
      </div>
    </main>
  );
}
