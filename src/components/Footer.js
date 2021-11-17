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
                <strong>Address 1: </strong>
                Saigon Royal Residence, <br />
                34-35 Ben Van Don, Ward 12, District 4, Ho Chi Minh City <br />
                <strong>Address 2: </strong>
                220 Hoang Ngan, Trung Hoa Ward, Cau Giay District, Hanoi <br />
                <strong>Phone: </strong>
                <a href="tel:+84908535898">+(84) 908 535 898</a>
                <br />
                <strong>Email: </strong>
                <a href="mailto:univn@uni-cus.net">univn@uni-cus.net</a>
                <br />
              </p>

              <div className="social-links">
                <div className="twitter">
                  <i className="fa fa-twitter"></i>
                </div>
                <div className="facebook">
                  <i className="fa fa-facebook"></i>
                </div>
                <div className="instagram">
                  <i className="fa fa-instagram"></i>
                </div>
                <div className="google-plus">
                  <i className="fa fa-google-plus"></i>
                </div>
                <div className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </div>
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
