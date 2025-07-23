import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col`}
    >
      <Navbar />
      <div className="flex-1 flex items-center justify-center mb-[20px] mt-[80px]">
        <div
          className={`w-full max-w-3xl p-10 rounded-2xl shadow-2xl ${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          }`}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-center text-pink-500 drop-shadow-lg">
            About BookHaven
          </h1>
          <p className="mb-8 text-center text-lg opacity-80">
            BookHaven is your gateway to a world of knowledge, inspiration, and
            growth. We believe in empowering minds through books that teach,
            guide, and inspire. Our curated collection is designed to make
            learning easy, fun, and accessible for everyone.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold mb-2 text-pink-400">
                Our Mission
              </h2>
              <p className="opacity-90">
                To ignite curiosity and foster lifelong learning by providing
                high-quality, diverse, and engaging books and courses for all
                ages and backgrounds.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold mb-2 text-pink-400">
                Meet the Team
              </h2>
              <p className="opacity-90">
                We are a passionate group of educators, technologists, and book
                lovers dedicated to making education accessible and enjoyable.
                Together, we strive to create a vibrant community of learners
                and readers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
