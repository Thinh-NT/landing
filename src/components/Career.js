import React from "react";
import { headerCons } from "./constants/headerCons";
import { careerCons } from "./constants/careerCons";

function Career({ lang }) {
  return (
    <section id="career" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h3>{headerCons[lang].career}</h3>
          <div>
            {careerCons[lang].top()}
            <div className="career-welfare">
              <ul className="career-welfare__left border-right">
                <li>{careerCons[lang].welfare[0]}</li>
                <li>{careerCons[lang].welfare[1]} </li>
              </ul>
              <ul className="career-welfare__right">
                <li>{careerCons[lang].welfare[2]}</li>
                <li>{careerCons[lang].welfare[3]}</li>
              </ul>
            </div>
            {careerCons[lang].bottom}
          </div>
        </div>

        {/* <div className="row career-info">
          <div className="col-md-6">
            <div className="career-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Recruitment</h3>
              <address>Recruitment content for each position</address>
            </div>
          </div>

          <div className="col-md-6">
            <div className="career-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Internship program</h3>
              <p>Recruitment content for each position</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Career;
