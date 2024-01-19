import { Component, ReactNode } from "react";
import Styles from "./soundSection.module.scss";
import Link from "next/link";
class SoundSection extends Component {
  render(): ReactNode {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.body}>
          <div className={Styles.content}>
            <h2 className={Styles.title}>New Sound System</h2>
            <p className={Styles.text}>Teel the base.</p>
            <span className={Styles.description}>
              From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className={Styles.links}>
              <li>
                <button className={Styles.button}>Buy</button>
              </li>
              <li>
                <Link href="/" className={Styles.link}>
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SoundSection;
