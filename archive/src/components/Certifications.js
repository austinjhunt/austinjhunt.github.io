import React, { Component } from "react";

class Certifications extends Component {
  render() {
    let sectionName = "Certifications";
    if (this.props.certifications) {
      var certifications = this.props.certifications.map((certification) => {
        console.log(certification);
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
            key={certification.abbrev}
            style={{ cursor: "pointer" }}
          >
            <div className="card certification-card ">
              <div className="card-header text-center">
                {certification.abbrev}
              </div>

              <div className="img-container">
                <img
                  class="card-img-top"
                  src={`/images/${certification.image}`}
                  alt={certification.abbrev}
                ></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">{certification.full_name}</h5>
                <hr />
                <p className="card-text">
                  Earned {certification.date_earned} &middot; Issued by{" "}
                  {certification.issued_by}
                </p>
                <a
                  target="_blank"
                  href={certification.link}
                  className="btn btn-dark btn-lg"
                >
                  View Credential
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="certifications" className="certifications">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{certifications}</div>
          </div>
        </div>
        <hr />
      </section>
    );
  }
}

export default Certifications;
