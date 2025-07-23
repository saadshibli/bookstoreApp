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
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col`}
    >
      <Navbar />
      <div className="flex-1 flex items-center justify-center mb-[20px] mt-[80px]">
        <div
          className={`w-full max-w-lg p-8 rounded-2xl shadow-2xl ${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          }`}
        >
          <h2 className="text-3xl font-extrabold mb-2 text-center text-pink-500">
            Contact Us
          </h2>
          <p className="mb-8 text-center text-lg opacity-80">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you soon.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-sm">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                    : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                } focus:ring-2 focus:ring-pink-400`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-pink-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                    : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                } focus:ring-2 focus:ring-pink-400`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-pink-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                placeholder="Your Message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 resize-none ${
                  theme === "dark"
                    ? "bg-slate-700 text-white placeholder:text-gray-400 border-gray-600"
                    : "bg-gray-100 text-black placeholder:text-gray-500 border-gray-300"
                } focus:ring-2 focus:ring-pink-400`}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-pink-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
