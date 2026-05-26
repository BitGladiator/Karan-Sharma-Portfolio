"use client";
import React, { useState } from "react";
import TerminalLoader from "./components/TerminalLoader"; 

import Herosection from "./components/HeroSection";
// import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* {!loaded && <TerminalLoader onComplete={() => setLoaded(true)} />}  */}

      {/* {loaded && (  */}
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <Herosection />
          <Instructors />
          <MusicSchoolTestimonials />
          <WhyChooseUs />
       
          <UpcomingWebinars />
         
          <Footer />
        </main>
       
       {/* } */}
    </>
  );
}
