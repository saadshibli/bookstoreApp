import React from "react";
import Banner from "../assets/Banner.png"

export default function Banners() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-20 order-2 md:order-1">
          <div className="space-y-10">
            <h1 className="text-3xl font-bold">
              Empowering minds with books that <span className="text-pink-500">teach, guide,</span> and <span className="text-pink-500">inspire.</span>
            </h1>
            <p className="">
              Dive into a curated selection of educational reads designed to expand your knowledge and sharpen your skills. From foundational concepts to advanced insights, every book is a step forward in your learning journey.
            </p>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
          </div>
          <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition">
            Subscribe Now
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1  flex justify-around items-center">
          <img src={Banner} alt="bookBanner" className="w-[400px] h-auto mt-20" />
        </div>
      </div>
    </>
  );
}
