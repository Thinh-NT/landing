import React from "react";
import { headerCons } from "./constants/headerCons";

function Contact({ lang }) {
  return (
    <section id="contact" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h3>{headerCons[lang].contact}</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>
                <a
                  href="https://goo.gl/maps/RXgV2XSpKgcdGiRV8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saigon Royal Residence
                </a>
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+84908535898">+(84) 908 535 898</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@uni-cus.net">info@uni-cus.net</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
