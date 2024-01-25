import { Component } from "react";
import Image from "next/image";
import Link from "next/link";
// Images
import Iphone from "../../public/assets/images/iphone-14.jpg";
import HoldingIphone from "../../public/assets/images/iphone-hand.png";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.handleLearnMore = this.handleLearnMore.bind(this);
  }
  handleLearnMore() {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="jumbotron-section wrapper">
        <h2 className="title">New</h2>
        <Image
          className="logo"
          src={Iphone}
          alt="iPhone 14 Pro"
          // width={0}
          // height={0}
        />
        <p className="text">Big and bigger.</p>
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
        <Image
          className="iphone-img"
          src={HoldingIphone}
          alt="iPhone-img"
          // width={0}
          // height={0}
        />
      </div>
    );
  }
}

export default Jumbotron;
