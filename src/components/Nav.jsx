"use client";

import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import Search from "../../public/assets/images/search.svg";
import Store from "../../public/assets/images/store.svg";
import Styles from "./nav.module.scss";

class Nav extends Component {
  render() {
    return (
      <nav className={Styles.nav_wrapper}>
        <div className={Styles.nav_content}>
          <ul className={Styles.list_styled}>
            <li>
              <Image src={Logo} alt="main logo" width={0} height={0} />
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Store
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Mac
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                iPad
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                iPhone
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Watch
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                AirPods
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Tv & Home
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Entertainment
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Accessories
              </Link>
            </li>
            <li>
              <Link className={Styles.link_styled} href="/">
                Support
              </Link>
            </li>
            <li>
              <Image src={Search} alt="search" width={0} height={0} />
            </li>
            <li>
              <Image src={Store} alt="store" width={0} height={0} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
