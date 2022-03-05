import React, { Component } from "react";

class Sketchbook extends Component {
  render() {
    return (
      <section id="sketchbook">
        <div className="col-md-12 text-center">
          <a
            href="https://www.sketchyactivity.com"
            className="btn btn-lg p-3"
            target="_blank"
          >
            <div className="pen-image blue">
              <img src="images/blue-bic.png"></img>
            </div>
            <h2 className="site-link">Open My Sketchbook</h2>
            <div className="pen-image red">
              <img src="images/red-bic.png" className="flipx"></img>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default Sketchbook;
