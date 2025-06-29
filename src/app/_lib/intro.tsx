"use client";

import React, { useState } from "react";
import me from "../../../assets/me.jpeg";
import TrueFocus from "../../../textAni/TrueFocus/TrueFocus";
import DotGrid from "../../../Back/DotGrid/DotGrid";
import Image from "next/image";
function Intro() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex justify-center items-center h-screen w-[100vw] overflow-hidden px-4">
      {/* Dot Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0">
        <DotGrid
          style={{ width: "100%" }}
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full mt-12">
        {/* Profile Image */}
        <div
          className={`w-[min(300px,70vw)] h-[min(300px,70vw)] rounded-full border-4 border-white overflow-hidden bg-[#5227FF] transition-transform duration-500 ${
            isHovered
              ? "translate-x-2 translate-y-2"
              : "-translate-x-2 -translate-y-2"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full">
            <Image
              src={me}
              alt="Profile image of Aevam Shingala"
              className="w-full h-full object-cover mix-blend-hard-light"
            />
          </div>
        </div>

        {/* Name & Greeting */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mt-6">
          <p className="text-3xl sm:text-5xl font-bold text-white">
            Hi, I&apos;m
          </p>
          <TrueFocus
            sentence="Aevam Shingala"
            manualMode={false}
            blurAmount={5}
            borderColor="#6fcce1"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
