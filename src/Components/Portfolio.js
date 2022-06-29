import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const books = this.props.data.books.map(function (books) {
      let projectImage = "images/portfolio/" + books.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div  className="item-wrap">
            <Zmage alt={books.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{books.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Libros de trabajo</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {books}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
