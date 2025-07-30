import React from "react";
import {useState} from 'react';
import Banner from "../assets/Banner.png";
import toast from "react-hot-toast";

export default function Banners() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate a subscription process
    const toastId = toast.loading("Subscribing...");
    setTimeout(() => {
      toast.success(`Thank you for subscribing, ${email}!`, {
        id: toastId,
        duration: 4000,
      });
      setEmail("");
    }, 1500);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full md:w-1/2 mt-12 md:mt-20 order-2 md:order-1">
        <div className="space-y-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Empowering minds with books that{" "}
            <span className="text-pink-500">teach, guide,</span> and{" "}
            <span className="text-pink-500">inspire.</span>
          </h1>
          <p>
            Dive into a curated selection of educational reads designed to
            expand your knowledge and sharpen your skills. From foundational
            concepts to advanced insights, every book is a step forward in your
            learning journey.
          </p>
          <label className="flex items-center gap-2 border rounded-md px-3 py-2 dark:bg-slate-900 dark:text-white">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input
              type="email"
              placeholder="Enter your email to subscribe"
              required
              value={email}
              className="bg-transparent outline-none w-full"
              aria-label="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button
            className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
            aria-label="Subscribe to newsletter" onClick={handleSubscribe}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 order-1 flex justify-around items-center">
        <img
          src={Banner}
          alt="Books Promotion Banner"
          className="w-[400px] h-auto mt-20"
        />
      </div>
    </div>
  );
}
