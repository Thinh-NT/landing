import React from "react";
import { slideCons } from "./constants/slideCons";
function Section({ lang }) {
  return (
    <section id="intro">
      <div className="intro-container">
        <div
          id="introCarousel"
          className="carousel  slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators"></ol>
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url('img/intro-carousel/five.jpg')` }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>{slideCons[lang].slide1.heading}</h2>
                  <p>{slideCons[lang].slide1.content}</p>
                  <a href="#tariff" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url('img/intro-carousel/two.jpg')` }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>{slideCons[lang].slide2.heading}</h2>
                  <p>{slideCons[lang].slide2.content}</p>
                  <a href="#logistics" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url('img/intro-carousel/three.jpeg')`,
              }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>{slideCons[lang].slide3.heading}</h2>
                  <p>{slideCons[lang].slide3.content}</p>
                  <a href="#tariff" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url('img/intro-carousel/four.jpg')` }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>{slideCons[lang].slide4.heading}</h2>
                  <p>{slideCons[lang].slide4.content}</p>
                  <a
                    href="#featured-services"
                    className="btn-get-started scrollto"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url('img/intro-carousel/one.jpg')` }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2>{slideCons[lang].slide5.heading}</h2>
                  <p>{slideCons[lang].slide5.content}</p>
                  <a href="#marketreseach" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#introCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ion-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#introCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon ion-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Section;
