import React, { useState } from "react";

function Services({ data, lang }) {
  const [antiD, setAntiD] = useState(false)
  const [custom, setCustom] = useState(false)
  const [fta, setFta] = useState(false)
  const [sale, setSale] = useState(false)
  const [logistic, setLogistic] = useState(false)
  const [market, setMarket] = useState(false)
  const [rebuild, setRebuild] = useState(false)
  const [tariff, setTariff] = useState(false)
  return (
    <section id="services">
      <div className="container">
        <header className="section-header wow fadeInUp">
          <h3>Services</h3>

        </header>
        <div className="row">
          {data.Services[lang].AntiDumping(antiD,setAntiD)}
          {data.Services[lang].CustomsDecitionComplaint(custom,setCustom)}
          {data.Services[lang].FTA(fta,setFta)}
          {data.Services[lang].Sale(sale,setSale)}
          {data.Services[lang].Logistics(logistic,setLogistic)}
          {data.Services[lang].MarketReseach(market,setMarket)}
          {data.Services[lang].Setup(rebuild,setRebuild)}
          {data.Services[lang].Tariff(tariff,setTariff)}
        </div>
      </div>
    </section>
  );
}

export default Services;
