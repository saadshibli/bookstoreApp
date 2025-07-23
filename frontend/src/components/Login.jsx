import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookhavenapp.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("LoggedIn Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
          console.log(err);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div
          className={`h-[360px] modal-box ${
            theme === "dark"
              ? "bg-slate-900 text-white border-gray-700 border-[4px]"
              : "bg-white text-black border-[2px] border-pink-500"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg p-2">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <h6>Email</h6>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-80 px-3 border rounded-md outline-none ${
                  theme === "dark"
                    ? "bg-slate-800 text-white placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <h6>Password</h6>
              <input
                type="password"
                placeholder="Enter your Password"
                className={`w-80 px-3 border rounded-md outline-none ${
                  theme === "dark"
                    ? "bg-slate-900 text-white placeholder-gray-400"
                    : "bg-white text-black placeholder-gray-500"
                }`}
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="pt-6 flex items-center justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer px-2"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
