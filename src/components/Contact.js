import React from "react";
import { headerCons } from "./constants/headerCons";
import Client1 from "../assets/customer/Picture1.png";
import Client2 from "../assets/customer/Picture2.jpg";
import Client3 from "../assets/customer/Picture3.png";
import Client4 from "../assets/customer/Picture4.png";
import Client5 from "../assets/customer/Picture5.png";
import Client6 from "../assets/customer/Picture6.png";
import Client7 from "../assets/customer/Picture7.png";
import Client8 from "../assets/customer/Picture8.png";


function Contact({ lang }) {
  return (
    <section id="contact" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h3>{headerCons[lang].customers}</h3>
        </div>
        <div className="row contact-info">
          <div className="col-md-3 centerItem">
            <img src={Client1} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client2} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client3} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client4} alt="" className="Client_logo"/>
          </div>
        </div>
        <div className="row contact-info" style={{ paddingTop: 50}}>
          <div className="col-md-3 centerItem">
            <img src={Client5} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client6} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client7} alt="" className="Client_logo"/>
          </div>
          <div className="col-md-3 centerItem">
            <img src={Client8} alt="" className="Client_logo"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
