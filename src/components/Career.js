import React from "react";

function Career() {
  return (
    <section id="career" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h3>Career opportunities</h3>
          <p>
            Human resources are the core factor that ensures a stable and
            sustainable business. UNI always ensures a fair talent recruitment
            process and the best environment for employees
          </p>
        </div>

        <div className="row career-info">
          <div className="col-md-6">
            <div className="carrer-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Recruitment</h3>
              <address>
              Recruitment content for each position
              </address>
            </div>
          </div>

          <div className="col-md-6">
            <div className="career-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Internship program</h3>
              <p>
                Recruitment content for each position
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Career;
