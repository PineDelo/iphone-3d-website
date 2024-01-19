"use client";
import { Component, ReactNode } from "react";
import "./page.module.css";
import Jumbotron from "@/components/Jumbotron";
import SoundSection from "@/components/SoundSection";
import DisplaySection from "@/components/DisplaySection";

class Home extends Component {
  render(): ReactNode {
    return (
      <>
        <Jumbotron />
        <SoundSection />
        <DisplaySection />
      </>
    );
  }
}

export default Home;
