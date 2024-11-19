import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import axios from 'axios';
import toast from "react-hot-toast";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
        };


        try {
            const res = await axios.post('https://kitaab-eosin.vercel.app/user/signup', formData);

            if (res.data) {
                localStorage.setItem("Users", JSON.stringify(res.data.result));
                toast.success("Signup Successfully");
                navigate(from, { replace: true });
            }
        } catch (err) {
            console.log(err)
            toast.error(err.response.data.msg || "Signup failed");
        }
    }


    return (
        <>
            <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-100  dark:text-black">
                <div id="my_modal_2" className="relative p-6 bg-white shadow-lg rounded-lg w-96">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Button */}
                        <Link to="/" className="absolute top-2 right-2">
                            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                        </Link>
                        <h3 className="font-bold text-lg">Signup</h3>
                        <div className="mt-4 space-y-2">
                            <label className="block">Name</label>
                            <input
                                className="w-full py-2 px-3 border rounded-md outline-none"
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name.."
                            />
                            {errors.name && <span className='text-sm text-red-500'>Required Field</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Email</label>
                            <input
                                className="w-full py-2 px-3 border rounded-md outline-none"
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter Your Email.."
                            />
                            {errors.email && <span className='text-sm text-red-500'>Required Field</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Password</label>
                            <input
                                className="w-full py-2 px-3 border rounded-md outline-none"
                                type="password"
                                {...register("password", { required: true })}
                                placeholder="Enter Your Password.."
                            />
                            {errors.password && <span className='text-sm text-red-500'>Required Field</span>}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                                Signup
                            </button>
                            <p>
                                Have an account?{" "}
                                <Link to="/" className="underline text-blue-500 cursor-pointer">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
