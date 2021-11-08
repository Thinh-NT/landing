import React from "react";
import { headerCons } from "./constants/headerCons";
import { aboutCons } from "./constants/aboutCons";

function About({ lang }) {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>{headerCons[lang].about}</h3>
          <p>{aboutCons[lang].heading}</p>
        </header>

        <div className="row about-cols text-justify">
          {/* quá trình hình thành */}
          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="img/about_mission.jpg" alt="" className="img-fluid-about" />
                <div className="icon">
                  <i className="ion-ios-speedometer-outline"></i>
                </div>
              </div>
              <h2 className="title">
                {aboutCons[lang].companyFormation.heading}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutCons[lang].companyFormation.content,
                }}
              ></p>
            </div>
          </div>
          {/* sứ mệnh */}
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="img/about_plan.jpeg" alt="" className="img-fluid-about" />
                <div className="icon">
                  <i className="ion-ios-list-outline"></i>
                </div>
              </div>
              <h2 className="title">{aboutCons[lang].ourMission.heading}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutCons[lang].ourMission.content,
                }}
              ></p>
            </div>
          </div>
          {/* tầm nhìn */}
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="img/about_vision.jpg" alt="" className="img-fluid-about" />
                <div className="icon">
                  <i className="ion-ios-eye-outline"></i>
                </div>
              </div>
              <h2 className="title">{aboutCons[lang].vision.heading}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutCons[lang].vision.content,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
