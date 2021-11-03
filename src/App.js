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
import Sidebar from "./Sidebar";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

const Lang = {
  get: function () {
    return localStorage.getItem("lang");
  },
  set: function (lang) {
    localStorage.setItem("lang", lang);
  },
  init: function () {
    localStorage.setItem("lang", "VI");
    return this.get();
  },
};

function App() {
  const [lang, setLang] = useState(() => Lang.get() || Lang.init());
  const data = {
    Header: headerCons,
    Services: servicesCons,
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSetLang = (lang) => {
    Lang.set(lang);
    setLang(lang);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Sidebar
              isOpen={isOpen}
              toggle={toggle}
              data={data}
              lang={lang}
              setLang={handleSetLang}
            />
            <Header
              data={data}
              setLang={handleSetLang}
              lang={lang}
              isOpen={isOpen}
              toggle={toggle}
            />
            <Section />
            <main id="main">
              <ServiceSection />
              <About lang={lang} />
              <Services data={data} lang={lang} />
              {/* <CallToAction /> */}
              {/* <Skill /> */}
              {/* <Facts /> */}
              {/* <PortPolio /> */}
              <Clients lang={lang} />
              <Career lang={lang} />
              <Contact lang={lang} />
            </main>
            <Footer lang={lang} />
            <div style={{ cursor: "pointer" }} className="back-to-top">
              <i className="fa fa-chevron-up"></i>
            </div>
          </div>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
