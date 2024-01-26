"use client";
import { Component, createRef } from "react";
import "./page.module.css";
import Jumbotron from "@/components/Jumbotron";
import SoundSection from "@/components/SoundSection";
import DisplaySection from "@/components/DisplaySection";
import WebgiViewer from "@/components/WebgiViewer";

class Home extends Component {
  constructor() {
    super();
    this.webgiViewerRef = createRef();
  }

  handlePreview = () => {
    this.webgiViewerRef.current.triggerPreview();
  };

  render() {
    return (
      <>
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={this.handlePreview} />
        <WebgiViewer ref={this.webgiViewerRef} />
      </>
    );
  }
}

export default Home;
