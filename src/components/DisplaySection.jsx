import { Component, ReactNode } from "react";
import Styles from "./displaySection.module.scss";

class DisplaySection extends Component {
  render() {
    return (
      <div className={Styles.wrapper}>
        <h2 className={Styles.title}>New</h2>
        <p className={Styles.text}>Brilliant.</p>
        <span className={Styles.description}>
          A display that&apos;s up to 2x brighter in the sun.
        </span>
        <div className={Styles.button}>Try me!</div>
        <button className={Styles.back_button}>Top</button>
      </div>
    );
  }
}

export default DisplaySection;
