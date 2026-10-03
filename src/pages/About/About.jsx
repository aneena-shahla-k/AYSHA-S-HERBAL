import React from "react";

import AboutHero from "../../components/AboutMain/AboutHero";
import OurStory from "../../components/AboutMain/OurStory";
import MissionValues from "../../components/AboutMain/MissionValues";
import WhyChoose from "../../components/AboutMain/WhyChoose";
import CommitmentSection from "../../components/AboutMain/CommitmentSection";
import Testimonials from "../../components/AboutMain/Testimonials";

export default function About() {
  return (
    <div className="herbaglow-about">
      <main>
        <AboutHero />
        <OurStory />
        <MissionValues />
        <WhyChoose />
        <CommitmentSection />
        <Testimonials />
      </main>


    </div>
  );
}