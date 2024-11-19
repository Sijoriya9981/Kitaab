import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // Use at the top level

    const onSubmit = async (data) => {
        const formData = {
            email: data.email,
            password: data.password,
        };


        try {
            const res = await axios.post('https://kitaab-eosin.vercel.app/user/login', formData);

            if (res.data) {

                toast.success("Login Successfully");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.result));
                }, 1000);


            }
        } catch (err) {
            toast.error(err.response.data.message || "Login failed");
        }
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                className="w-80 py-1 px-3 border rounded-md outline-none"
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter Your Email.."
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">Required Field</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                className="w-80 py-1 px-3 border rounded-md outline-none"
                                type="password"
                                {...register("password", { required: true })}
                                placeholder="Enter Your Password.."
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">Required Field</span>}
                        </div>

                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                <span>Not Registered?</span>
                                <Link
                                    to="/signup"
                                    className="underline cursor-pointer text-blue-500"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Login;
