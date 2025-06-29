import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Particles from "../../../Back/Particles/Particles";

function Contact() {
  const [state, handleSubmit] = useForm("mldnakyo");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl font-semibold">
        Thanks for your message! 🎉
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-950 py-12 px-4 mt-14 overflow-hidden w-full">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 text-center mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50 cursor-pointer"
            >
              Submit
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/aevam_patel1336/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-pink-500 hover:text-pink-600 transition"
            >
              <FaInstagram className="text-4xl sm:text-5xl mb-1" />
              <span className="text-base font-medium">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aevam-shingala-9a8698339/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-400 hover:text-blue-500 transition"
            >
              <FaLinkedin className="text-4xl sm:text-5xl mb-1" />
              <span className="text-base font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
