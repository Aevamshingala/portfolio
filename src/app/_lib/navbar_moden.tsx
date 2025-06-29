"use client";
import React, { useState } from "react";
import Orb from "../../../Back/Orb/Orb.jsx";
import {
  FaUser,
  FaInfoCircle,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

type sectionref = {
  intro: React.RefObject<HTMLDivElement | null>;
  summary: React.RefObject<HTMLDivElement | null>;
  skill: React.RefObject<HTMLDivElement | null>;
  project: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
};

interface NavbarProps {
  refs: sectionref;
}

function Navbar_moden({ refs }: NavbarProps) {
  const [isHover, setIsHover] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center z-50">
      <div
        className="relative w-40 h-40 flex justify-center items-center"
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Intro */}
        <button
          className={`rounded-full w-12 h-12 bg-amber-300 absolute transition-all duration-300 cursor-pointer flex justify-center items-center ${
            isHover ? "transform -translate-y-20" : ""
          }`}
          onClick={() => scrollTo(refs.intro)}
        >
          <FaUser className="text-white text-xl" />
        </button>

        {/* Summary */}
        <button
          className={`rounded-full w-12 h-12 bg-red-600 absolute transition-all duration-300 cursor-pointer flex justify-center items-center ${
            isHover ? "transform translate-x-20" : ""
          }`}
          onClick={() => scrollTo(refs.summary)}
        >
          <FaInfoCircle className="text-white text-xl" />
        </button>

        {/* Skill */}
        <button
          className={`rounded-full w-12 h-12 bg-green-500 absolute transition-all duration-300 cursor-pointer flex justify-center items-center ${
            isHover ? "transform translate-y-20 translate-x-10" : ""
          }`}
          onClick={() => scrollTo(refs.skill)}
        >
          <FaTools className="text-white text-xl" />
        </button>

        {/* Project */}
        <button
          className={`rounded-full w-12 h-12 bg-purple-400 absolute transition-all duration-300 cursor-pointer flex justify-center items-center ${
            isHover ? "transform translate-y-20 -translate-x-10" : ""
          }`}
          onClick={() => scrollTo(refs.project)}
        >
          <FaFolderOpen className="text-white text-xl" />
        </button>

        {/* Contact */}
        <button
          className={`rounded-full w-12 h-12 bg-blue-400 absolute transition-all duration-300 cursor-pointer flex justify-center items-center ${
            isHover ? "transform -translate-x-20" : ""
          }`}
          onClick={() => scrollTo(refs.contact)}
        >
          <FaEnvelope className="text-white text-xl" />
        </button>

        {/* Orb Center */}
        <div
          className={`rounded-full w-20 h-20 bg-[#1a1a1a] absolute transition-all duration-300 cursor-pointer flex items-center justify-center ${
            isHover ? "scale-100" : "scale-90"
          }`}
          onMouseEnter={() => setIsHover(true)}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar_moden;
