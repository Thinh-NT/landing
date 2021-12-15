import "./App.css";
import Header from "./components/Header";
import SmoothScroll from "smooth-scroll";
import Section from "./components/Section";
import About from "./components/About";
import Services from "./components/Services";
// import Clients from "./components/Clients";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Career from "./components/Career";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { headerCons } from "./components/constants/headerCons";
import { servicesCons } from "./components/constants/servicesCons";
import Sidebar from "./Sidebar";
import styled from "styled-components";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
const Container = styled.div`
  font-family: ${({ lang }) =>
    lang === "KO" ? `'Nanum Gothic Coding', serif !important` : ""};
`;
const Lang = {
  get: function () {
    let lang = localStorage.getItem("lang");
    if (["VI", "EN", "KO"].includes(lang)) {
      return lang;
    }
    return this.init();
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
          <Container lang={lang}>
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
            <Section lang={lang} />
            <main id="main">
              <About lang={lang} />
              <Services data={data} lang={lang} />
              <Career lang={lang} />
              <Client lang={lang} />
            </main>
            <Footer lang={lang} />
            <div style={{ cursor: "pointer" }} className="back-to-top">
              <i className="fa fa-chevron-up"></i>
            </div>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
