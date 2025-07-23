import React from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Signup() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";
    const {
            register,
            handleSubmit,
            formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("https://bookhavenapp.onrender.com/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if(res.data) {
                    toast.success('Signup Successfully');
                    navigate(from, { replace: true });
                }
                localStorage.setItem("user", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if(err.response) {
                    toast.error("Error: " + err.response.data.message);
                    console.log(err);
                }
            })
    }

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[400px] border-[2px] shadow-md p-5 rounded-md">
                    <div className={`${theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <div class="flex justify-between">
                                <h3 className="font-bold text-lg">Signup</h3>
                                    <Link to="/" className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
                            </div>
                            {/* Name */}
                            <div className="mt-4 space-y-2">
                                <h6>Name</h6>
                                <input type="text" placeholder="Enter your fullname" className={`w-80 px-3 border rounded-md outline-none ${theme === "dark" ? "bg-slate-800 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-500"}`} {...register("fullname", { required: true })}/>
                                <br />
                                {errors.fullname && <span  className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <h6>Email</h6>
                                <input type="email" placeholder="Enter your email" className={`w-80 px-3 border rounded-md outline-none ${theme === "dark" ? "bg-slate-800 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-500"}`} {...register("email", { required: true })}/>
                                <br />
                                {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <h6>Password</h6>
                                <input type="password" placeholder="Enter your Password" className={`w-80 px-3 border rounded-md outline-none ${theme === "dark" ? "bg-slate-800 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-500"}`} {...register("password", { required: true })}/>
                                <br />
                                {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                                <p>Have account?{" "} <button className='underline text-blue-500 cursor-pointer px-2' onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</button>{" "}</p>
                                <Login/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup