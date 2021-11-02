import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row Footer__content">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>Uni Consulting</h3>
              <p>
                Thảo xinh dep odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
                fermentum leo. Amet volutpat consequat mauris nunc congue.
              </p>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right"></i> <a href="#a">Home</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#a">About us</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#a">Services</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#a">Terms of service</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right"></i>{" "}
                  <a href="#a">Privacy policy</a>
                </li>
              </ul>
            </div> */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Saigon Royal Residence, 34-35 Ben Van Don,
                Ward 12, District 4,
                <br />
                Ho Chi Minh City <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>

              <div className="social-links">
                <a href="#a" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#a" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#a" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#a" className="google-plus">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#a" className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna veniam enim veniam illum dolore legam minim quorum culpa
                amet magna export quem marada parida nodela caramase seza.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
