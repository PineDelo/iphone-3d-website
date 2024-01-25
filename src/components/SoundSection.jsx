import { Component, ReactNode } from "react";
import Link from "next/link";
class SoundSection extends Component {
  constructor(props) {
    super(props);
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }

  handleLearnMore() {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="sound-section wrapper">
        <div className="body">
          <div className="sound-section-content content">
            <h2 className="title">New Sound System</h2>
            <p className="text">Teel the base.</p>
            <span className="description">
              From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
              <li>
                <div className="button">Buy</div>
              </li>
              <li>
                <a className="link" onClick={this.handleLearnMore}>
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SoundSection;
