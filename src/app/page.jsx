"use client";
import { Component, createRef } from "react";
import "./page.module.css";
import Jumbotron from "@/components/Jumbotron";
import SoundSection from "@/components/SoundSection";
import DisplaySection from "@/components/DisplaySection";
import WebgiViewer from "@/components/WebgiViewer";
import Loader from "@/components/Loader";

class Home extends Component {
  constructor() {
    super();
    this.webgiViewerRef = createRef();
    this.contentRef = createRef();
  }

  handlePreview = () => {
    this.webgiViewerRef.current.triggerPreview();
  };

  render() {
    return (
      <>
        <Loader />
        <div ref={this.contentRef} id="content">
          <Jumbotron />
          <SoundSection />
          <DisplaySection triggerPreview={this.handlePreview} />
        </div>
        <WebgiViewer contentRef={this.contentRef} ref={this.webgiViewerRef} />
      </>
    );
  }
}

export default Home;
