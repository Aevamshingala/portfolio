"use client";
import { useRef } from "react";
import Contact from "./_lib/contact";
import Intro from "./_lib/intro";
import Navbar_moden from "./_lib/navbar_moden";
import Project from "./_lib/project";
import Skill from "./_lib/skill";
import Summary from "./_lib/summary";

export default function Home() {
  const intro = useRef<HTMLDivElement | null>(null);
  const summary = useRef<HTMLDivElement | null>(null);
  const skill = useRef<HTMLDivElement | null>(null);
  const project = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div ref={intro}>
        <Intro />
      </div>
      <div className="w-full p-5 border-t-2 border-t-sky-400 border-dotted"></div>
      <div ref={summary}>
        <Summary />
      </div>
      <div className="w-full p-5 border-t-2 border-t-sky-400 border-dotted"></div>
      <div ref={skill} className="w-full h-full">
        <Skill />
      </div>
      <div className="w-full p-5 border-t-2 border-t-sky-400 border-dotted"></div>
      <div ref={project}>
        <Project />
      </div>
      <div className="w-full p-5 border-t-2 border-t-sky-400 border-dotted"></div>
      <div ref={contact}>
        <Contact />
      </div>
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          right: "max(2rem, 5vw)",
          bottom: "max(2rem, 5vw)",
          zIndex: 30,
        }}
      >
        <Navbar_moden refs={{ intro, summary, skill, project, contact }} />
      </nav>
    </div>
  );
}
