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

function App() {
  return (
    <Provider>
      <div className="min-h-screen bg-cream">
        <Header />
        <Switch>
          <Route path="/" component={Accueil} />
          <Route path="/approche" component={Approche} />
          <Route path="/formations" component={Formations} />
          <Route path="/financement" component={Financement} />
          <Route path="/qualite" component={Qualite} />
          <Route path="/accessibilite" component={Accessibilite} />
          <Route path="/contact" component={Contact} />
          {/* 404 */}
          <Route>
            <div className="pt-52 pb-40 max-w-[1180px] mx-auto px-6 md:px-[90px]">
              <h1 className="font-serif text-bleu text-5xl font-light">Page introuvable.</h1>
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
