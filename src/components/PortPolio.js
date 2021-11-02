import React from "react";

function PortPolio() {
  return (
    <section id="portfolio" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" id="services__modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="title">FTA-CO consultation</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="description">
                  <span className="span__description">
                    Why is consulting business metrics important?
                  </span>
                  <br />
                  In the period of global economic integration and trade
                  liberalization, Vietnam has actively participated in the
                  negotiation and signing of bilateral and multilateral FTAs. An
                  FTA is an agreement between two or more countries or
                  territories for the purpose of liberalizing trade in one or
                  more groups of goods by reducing tariffs. In order to benefit
                  from FTAs, businesses also need to meet a lot of requirements
                  on documents, certification, strict rules on investment
                  procedures, customs, trade facilitation, and technical
                  standards. , measures to quarantine animals and plants,
                  intellectual property ... require Vietnamese enterprises to
                  understand and apply flexibly and honestly according to
                  regulations. Therefore, If not, they will need an professional
                  agency to take care of it better.
                  <br />
                  <span className="span__description">
                    Why should you choose UNI as your consulting consultant?
                  </span>
                  <br />
                  With in-depth knowledge and practical understanding, we
                  provide a team of experienced consultants and analysts,
                  leading in the field of trade and customs. The legal UNI
                  consultant will actively support businesses to carry out
                  procedures and papers to make full use of FTAs. Support
                  businesses with all issues related to all import and export
                  goods.
                  <br />
                  <span className="span__description">
                    How can UNI support customers?
                  </span>
                  <br />
                  Our goal is to provide data checking, management and
                  consulting services for post-clearance activities to help
                  businesses. In addition, the consulting team can assist with
                  the correct classification of certified products of origin,
                  the relevant paperwork to receive tariff benefits, as well as
                  advice throughout the trade process. . Constantly updating
                  various media, dispatches, tax decisions and regulations need
                  to be closely monitored, researched and promptly responded to
                  when there is new information and regulations…
                  <br />
                  <span className="span__description">
                    Services UNI experts provide:
                  </span>
                  <br />
                  Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
                  <ul>
                    <li>EU-VIET FTA / CPTPP</li>
                    <li>GSP-REX</li>
                    <li>Apply for an export license </li>
                    <li>Consulting certificate of origin C/O </li>
                    <li>
                      Advising on the application of FTAs ​​for each specific
                      product or industry{" "}
                    </li>
                    <li>Other</li>
                  </ul>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/app1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div
                  className="link-preview"
                  title="Preview"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="ion ion-eye"></i>
                </div>
              </figure>

              <div className="portfolio-info">
                <h4 data-toggle="modal"
                  data-target="#exampleModal">
                  FTA-CO consultation
                </h4>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/web3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/web3.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 2"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">App 2</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/app2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/app2.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 2"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">App 2</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/card2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/card2.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 2"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">Card 2</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/web2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/web2.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 2"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">Web 2</a>
                </h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/app3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/app3.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 3"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">App 3</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/card1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/card1.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 1"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">Card 1</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/card3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/card3.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 3"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">Card 3</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="portfolio-wrap">
              <figure>
                <img
                  src="img/portfolio/web1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="img/portfolio/web1.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 1"
                  title="Preview"
                >
                  <i className="ion ion-eye"></i>
                </a>
                <a href="#a" className="link-details" title="More Details">
                  <i className="ion ion-android-open"></i>
                </a>
              </figure>

              <div className="portfolio-info">
                <h4>
                  <a href="#a">Web 1</a>
                </h4>
                <p>Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
