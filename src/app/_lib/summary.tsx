import React from "react";
import GradientText from "../../../textAni/GradientText/GradientText";
import Threads from "../../../Back/Threads/Threads";

function Summary() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        width: "100%",
        height: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem 0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          top: 10,
          left: -100,
          width: "100vw",
          height: "58vh",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "2rem",
          marginTop: "20%",
        }}
      >
        <h2 className="text-3xl text-gray-600 dark:text-gray-300 mb-6">
          Full Stack Developer
        </h2>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-2xl bg-transparent w-full p-5"
        >
          I craft stunning, high-performance websites and mobile applications
          using cutting-edge React, React Native, and MERN stack technologies to
          deliver exceptional digital experiences.
        </GradientText>
      </div>
    </div>
  );
}

export default Summary;
