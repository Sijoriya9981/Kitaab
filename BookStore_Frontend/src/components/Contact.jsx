import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const formdata = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        try {
            const res = await axios.post('http://kitaab-eosin.vercel.app/contact/message', formdata);
            if (res.data) {
                toast.success("Message submitted successfully!");
                window.location.reload()
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.msg || "Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-100 dark:bg-slate-800 dark:text-black">
                <div id="my_modal_2" className="relative p-6 bg-white shadow-lg rounded-lg w-96 mt-10">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className="mt-4 space-y-2">
                            <label className="block">Name</label>
                            <input
                                className="w-full py-2 px-3 border rounded-md outline-none"
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter Your Name.."
                            />
                            {errors.name && <span className='text-sm text-red-500'>Name is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Email</label>
                            <input
                                className="w-full py-2 px-3 border rounded-md outline-none"
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter Your Email.."
                            />
                            {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
                        </div>
                        <div className="mt-4 space-y-2">
                            <label className="block">Message</label>
                            <textarea
                                placeholder="Type Your Message"
                                {...register("message", { required: true })}
                                className="textarea textarea-bordered textarea-md w-full max-w-xs"
                            ></textarea>
                            {errors.message && <span className='text-sm text-red-500'>Message is required</span>}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
