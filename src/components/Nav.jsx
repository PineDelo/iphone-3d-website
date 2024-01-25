"use client";

import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";
import Search from "../../public/assets/images/search.svg";
import Store from "../../public/assets/images/store.svg";
class Nav extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul className="list-styled">
            <li>
              <Image src={Logo} alt="main logo" width={0} height={0} />
            </li>
            <li>
              <Link className="link-styled" href="/">
                Store
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                Mac
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                iPad
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                iPhone
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                Watch
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                AirPods
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                Tv & Home
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                Entertainment
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
                Accessories
              </Link>
            </li>
            <li>
              <Link className="link-styled" href="/">
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
