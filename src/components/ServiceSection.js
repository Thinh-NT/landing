import React from 'react'

function ServiceSection() {
  return (
    <section id="featured-services">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 box">
            <i className="ion-ios-bookmarks-outline"></i>
            <h4 className="title"><a href="#a">Lorem Ipsum Delino</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>

          <div className="col-lg-4 box box-bg">
            <i className="ion-ios-stopwatch-outline"></i>
            <h4 className="title"><a href="#a">Dolor Sitema</a></h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          </div>

          <div className="col-lg-4 box">
            <i className="ion-ios-heart-outline"></i>
            <h4 className="title"><a href="#a">Sed ut perspiciatis</a></h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceSection
