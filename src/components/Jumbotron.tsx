import { Component, ReactNode } from "react";
import Styles from "./jumbotron.module.scss";
import Image from "next/image";
import Link from "next/link";
// Images
import Iphone from "../../public/assets/images/iphone-14.jpg";
import HoldingIphone from "../../public/assets/images/iphone-hand.png";

class Jumbotron extends Component {
  handleLearnMore() {
    const element = document.querySelector(".sound_section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  }

  render(): ReactNode {
    return (
      <div className={Styles.wrapper}>
        <h2 className={Styles.title}>New</h2>
        <Image
          className={Styles.logo}
          src={Iphone}
          alt="iPhone 14 Pro"
          width={140}
          height={0}
        />
        <p className={Styles.text}>Big and bigger.</p>
        <span className="description">
          From $41.62/mo. for 24 mo. or $999 before trade-in
        </span>
        <ul className={Styles.links}>
          <li>
            <button className={Styles.button}>Buy</button>
          </li>
          <li>
            <Link
              className={Styles.link}
              href="/"
              onClick={this.handleLearnMore}
            >
              Learn more
            </Link>
          </li>
        </ul>
        <Image
          className={Styles.iphone_img}
          src={HoldingIphone}
          alt="iPhone-img"
          width={0}
          height={0}
        />
      </div>
    );
  }
}

export default Jumbotron;
