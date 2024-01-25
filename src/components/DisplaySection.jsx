import { Component } from "react";

class DisplaySection extends Component {
  constructor(props) {
    super(props);
    this.handleScrollToTop = this.handleScrollToTop.bind(this);
  }
  handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  render() {
    return (
      <div className="display-section wrapper">
        <h2 className="title">New</h2>
        <p className="text">Brilliant.</p>
        <span className="description">
          A display that&apos;s up to 2x brighter in the sun.
        </span>
        <div className="button">Try me!</div>
        <button className="back-button" onClick={this.handleScrollToTop}>
          Top
        </button>
      </div>
    );
  }
}

export default DisplaySection;
