import { Route, Switch } from "wouter";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/index";
import Approche from "./pages/approche";
import Formations from "./pages/formations";
import Financement from "./pages/financement";
import Qualite from "./pages/qualite";
import Accessibilite from "./pages/accessibilite";
import Contact from "./pages/contact";
import MentionsLegales from "./pages/mentions-legales";
import Confidentialite from "./pages/confidentialite";

function App() {
  return (
    <Provider>
      <div className="min-h-screen bg-[#FCFCFC]">
        <Header />
        <Switch>
          <Route path="/" component={Accueil} />
          <Route path="/approche" component={Approche} />
          <Route path="/formations" component={Formations} />
          <Route path="/financement" component={Financement} />
          <Route path="/qualite" component={Qualite} />
          <Route path="/accessibilite" component={Accessibilite} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentions-legales" component={MentionsLegales} />
          <Route path="/confidentialite" component={Confidentialite} />
          {/* 404 */}
          <Route>
            <div className="py-20 bg-slate-50">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-900 tracking-tight">Page introuvable.</h1>
              </div>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
      {import.meta.env.DEV && <AgentFeedback />}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
