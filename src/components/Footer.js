import React from "react";
import {footerCons} from "./constants/footerCons";
function Footer({ lang }) {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row Footer__content">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>{footerCons[lang].contact}</h4>
              <p>
                <strong>{footerCons[lang].address1}: </strong>
                {footerCons[lang].address1_}<br />
                <strong>{footerCons[lang].address2}: </strong>
                {footerCons[lang].address2_} <br />
                <strong>{footerCons[lang].phone}: </strong>
                <a href="tel:+84908535898">+(84) 908 535 898</a>
                <br />
                <strong>Email: </strong>
                <a href="mailto:univn@uni-cus.net">univn@uni-cus.net</a>
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>{footerCons[lang].newletter}</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna veniam enim veniam illum dolore legam minim quorum culpa
                amet magna export quem marada parida nodela caramase seza.
              </p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Email"/>
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
