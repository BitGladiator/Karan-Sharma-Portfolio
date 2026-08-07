"use client";
import React from "react";
import RefinedHero from "./components/RefinedHero";
import AboutMe from "./components/AboutMe";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen text-white antialiased">
      <RefinedHero />

      <AboutMe />

      <ExperienceSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}
