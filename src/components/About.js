import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3>ABOUT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </header>

        <div className="row about-cols">
          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="img/about-mission.jpg" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-speedometer-outline"></i>
                </div>
              </div>
              <h2 className="title">Company formation process</h2>
              <p>
                In 2020, UNI started operations in Vietnam as a pioneer in the
                field of customs consultancy and post-customs clearance data
                inspection. During the Covid pandemic, even with a small number
                of personnel, UNI had more than 30 foreign companies and
                customers. Typical examples such as Samsung, Posco, Dongsuh,
                Elentec ... In March 2021, UNI was officially established as
                “UNI Consulting Co., Ltd”.
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="img/about-plan.jpg" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-list-outline"></i>
                </div>
              </div>
              <h2 className="title">Vision</h2>
              <p>
                In the context of Vietnam expanding foreign trade activities,
                economic exchanges with other countries around the world,
              
                companies providing services today often only provide a certain
                segment, typically, law firms, including large companies, often
                have only strengths in legal advice with little practical
                experience in import and export procedures and post-customs
                clearance material management. 
              </p>
            </div>
          </div>

          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="img/about-vision.jpg" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-eye-outline"></i>
                </div>
              </div>
              <h2 className="title">
                Our Mission
              </h2>
              <p>
              On the other hand, logistics
                companies, despite their extensive experience, often lack an
                in-depth team to advise on the problems that import-export
                enterprises often encounter. Therefore, UNI is proud to be the
                first enterprise in Vietnam specializing in providing customs
                consultancy services and post-customs clearance data inspection,
                ensuring "specializing in customs" superior to the companies
                providing services in the market today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
