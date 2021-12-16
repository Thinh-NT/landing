import React, { useState } from "react";
import { servicesCons } from "./constants/servicesCons";
import { headerCons } from "./constants/headerCons";

function Services({ lang }) {
  const [antiD, setAntiD] = useState(false);
  const [custom, setCustom] = useState(false);
  const [fta, setFta] = useState(false);
  const [sale, setSale] = useState(false);
  const [logistic, setLogistic] = useState(false);
  const [market, setMarket] = useState(false);
  const [rebuild, setRebuild] = useState(false);
  const [tariff, setTariff] = useState(false);
  const [tax, setTax] = useState(false);

  return (
    <section id="services">
      <div className="container">
        <header className="section-header wow fadeInUp">
          <h3>{headerCons[lang].services}</h3>
        </header>
        <div className="row">
          {servicesCons[lang].Tax(tax, setTax)}
          {servicesCons[lang].Logistics(logistic, setLogistic)}
          {servicesCons[lang].Tariff(tariff, setTariff)}
          {servicesCons[lang].AntiDumping(antiD, setAntiD)}
          {servicesCons[lang].CustomsDecitionComplaint(custom, setCustom)}
          {servicesCons[lang].FTA(fta, setFta)}
          {servicesCons[lang].Sale(sale, setSale)}
          {servicesCons[lang].Setup(rebuild, setRebuild)}
          {servicesCons[lang].MarketReseach(market, setMarket)}
        </div>
      </div>
    </section>
  );
}

export default Services;
