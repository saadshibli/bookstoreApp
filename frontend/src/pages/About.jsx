// frontend/src/pages/About.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StoryIcon = () => (
  <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-5.25-8.494v5.494m10.5-5.494v5.494M4.125 18.75h15.75M4.125 18.75a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 014.125 4.5h15.75A2.25 2.25 0 0122.25 6.75v9.75a2.25 2.25 0 01-2.25-2.25H4.125z"></path></svg>
);
const MissionIcon = () => (
    <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path></svg>
);

export default function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-slate-900 text-white" : "bg-gray-50 text-black"}`}>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">We Believe in the Power of Books</h1>
            <p className="mt-4 text-md md:text-lg max-w-2xl">BookHaven is more than a bookstore; it's a community for those who seek knowledge and inspiration.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Story Section */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                <StoryIcon />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-pink-500 mb-3">Our Story</h2>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Founded in 2024, BookHaven started with a simple idea: to create a digital space where learning is an adventure. We set out to build a platform that curates the very best books and courses, making them accessible to learners of all ages and backgrounds.
                </p>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="flex-shrink-0 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-full">
                <MissionIcon />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-pink-500 mb-3">Our Mission</h2>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Our mission is to ignite curiosity and empower minds. We strive to foster a lifelong love for learning by providing a diverse and engaging collection of resources that inspire our readers to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
