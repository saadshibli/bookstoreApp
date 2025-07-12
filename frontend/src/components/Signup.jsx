import React from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
    const {
            register,
            handleSubmit,
            formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[400px] border-[2px] shadow-md p-5 rounded-md">
                    <div className="dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <div class="flex justify-between">
                                <h3 className="font-bold text-lg">Signup</h3>
                                    {/* if there is a button in form, it will close the modal */}
                                    <Link to="/" className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
                            </div>
                            {/* Name */}
                            <div className="mt-4 space-y-2">
                                <h6>Name</h6>
                                <input type="text" placeholder="Enter your fullname" className="w-80 px-3 border rounded-md outline-none" {...register("name", { required: true })}/>
                                <br />
                                {errors.name && <span  className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <h6>Email</h6>
                                <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none" {...register("email", { required: true })}/>
                                <br />
                                {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <h6>Password</h6>
                                <input type="password" placeholder="Enter your Password" className="w-80 px-3 border rounded-md outline-none" {...register("password", { required: true })}/>
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