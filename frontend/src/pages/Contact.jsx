// frontend/src/pages/Contact.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../context/ThemeContext";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className={`${theme === "dark" ? "bg-slate-900 text-white" : "bg-gray-50 text-black"}`}>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-md md:text-lg text-gray-600 dark:text-gray-300">
            Have a question or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                      : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                  } focus:ring-2 focus:ring-pink-400`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-pink-500 text-xs mt-1">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                      : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                  } focus:ring-2 focus:ring-pink-400`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                  })}
                />
                {errors.email && <span className="text-pink-500 text-xs mt-1">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block mb-1 font-semibold text-sm">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-all duration-200 resize-none ${
                    theme === "dark"
                      ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                      : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                  } focus:ring-2 focus:ring-pink-400`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <span className="text-pink-500 text-xs mt-1">{errors.message.message}</span>}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold text-md shadow-lg transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className={`p-8 md:p-10 flex flex-col justify-center ${theme === "dark" ? "bg-slate-900" : "bg-pink-50"}`}>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">123 Bookworm Lane, Reading City, 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">hello@bookhaven.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
