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
                Saigon Royal Residence, 34-35, Ben Van Don, Ward 12, District 4,
                Ho Chi Minh City
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">+1 5589 55488 55</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
