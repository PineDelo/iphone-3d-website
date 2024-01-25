"use client";
import { Component } from "react";
import "./page.module.css";
import Jumbotron from "@/components/Jumbotron";
import SoundSection from "@/components/SoundSection";
import DisplaySection from "@/components/DisplaySection";
import WebgiViewer from "@/components/WebgiViewer";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <SoundSection />
        <DisplaySection />
        <WebgiViewer />
      </>
    );
  }
}

export default Home;
