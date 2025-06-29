import React from "react";
import Aurora from "../../../Back/Aurora/Aurora";
import Particles from "../../../Back/Particles/Particles";
import SpotlightCard from "../../../com/SpotlightCard/SpotlightCard";

function Project() {
  return (
    <div className="relative flex justify-center items-center w-full px-4 py-10 overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-screen-xl">
        <div className="flex justify-center items-center mt-16">
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold text-center">
            Projects
          </h1>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center">
          {/* Website Projects */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="w-full sm:w-80 md:w-96 p-6 rounded-lg shadow-md bg-transparent">
              <h1 className="text-2xl font-bold text-cyan-500 mb-4">
                Website Projects
              </h1>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  Blog Post Website:
                </h2>
                <p className="text-gray-400 text-sm">
                  Full-stack blog platform using MERN stack with Tailwind for
                  styling.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  Affiliate Website:
                </h2>
                <p className="text-gray-400 text-sm">
                  Affiliate marketing website with Google Gemini AI content and
                  live chat.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Mobile Apps */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="w-full sm:w-80 md:w-96 p-6 rounded-lg shadow-md bg-transparent">
              <h1 className="text-2xl font-bold text-cyan-500 mb-4">
                Mobile Apps
              </h1>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  Spy App:
                </h2>
                <p className="text-gray-400 text-sm">
                  Secure React Native app for passwords and notes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  Brisk:
                </h2>
                <p className="text-gray-400 text-sm">
                  Full-stack image/video sharing via QR. Expo + MongoDB +
                  Cloudinary.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* NPM Packages */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="w-full sm:w-80 md:w-96 p-6 rounded-lg shadow-md bg-transparent">
              <h1 className="text-2xl font-bold text-cyan-500 mb-4">
                NPM Packages
              </h1>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  webvalid:
                </h2>
                <p className="text-gray-400 text-sm">
                  Simple form validation utility for web.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  react_message_shower_01:
                </h2>
                <p className="text-gray-400 text-sm">
                  Custom popup messaging package for React apps.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default Project;
