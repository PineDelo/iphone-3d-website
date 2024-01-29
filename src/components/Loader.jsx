import Image from "next/image";
import AnimatedLogo from "../../public/assets/images/logo-animated.gif";
import { Component } from "react";

class Loader extends Component {
  
    render() {
    return (
      <div className="loader">
        <Image
          className="logo"
          src={AnimatedLogo}
          alt="apple loader"
          width={0}
          height={0}
        />
      </div>
    );
  }
}

export default Loader;
