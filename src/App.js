import "./App.css";
import Header from "./components/Header";
import SmoothScroll from "smooth-scroll";
import Section from "./components/Section";
import ServiceSection from "./components/ServiceSection";
import About from "./components/About";
import Services from "./components/Services";
// import CallToAction from "./components/CallToAction";
// import Skill from './components/Skill';
// import Facts from "./components/Facts";
// import PortPolio from './components/PortPolio';
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Career from "./components/Career";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { headerCons } from "./components/constants/headerCons";
import { servicesCons } from "./components/constants/servicesCons";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
function App() {
  const [lang, setLang] = useState("EN");
  const data = {
    Header: headerCons,
    Services: servicesCons,
  };
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <div>
            <Header data={data} setLang={setLang} lang={lang} />
            <Section />
            <main id="main">
              <ServiceSection />
              <About />
              <Services data={data} lang={lang} />
              {/* <CallToAction /> */}
              {/* <Skill /> */}
              {/* <Facts /> */}
              {/* <PortPolio /> */}
              <Clients />
              <Career />
              <Contact />
            </main>
            <Footer />
            <div style={{ cursor: "pointer" }} className="back-to-top">
              <i className="fa fa-chevron-up"></i>
            </div>
          </div>
        </Route>
        <Route >
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
