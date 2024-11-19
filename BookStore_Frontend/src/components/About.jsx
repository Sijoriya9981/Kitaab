import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white px-6 mt-10">
                <div className="max-w-4xl text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Welcome to <span className="font-semibold">Our Company</span>! We are dedicated to delivering innovative and
                        top-quality solutions that meet our customers' needs. Our team consists of skilled professionals
                        who are passionate about technology and strive to push boundaries in everything we do.
                    </p>
                    <div className="space-y-4 text-left">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p>
                            Our mission is to revolutionize the industry with cutting-edge technology, ensuring customer satisfaction
                            and fostering long-term relationships. We are committed to creating products and services that make a
                            positive impact on the world.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">Our Vision</h2>
                        <p>
                            We envision a future where technology empowers individuals and organizations to achieve their goals
                            effortlessly. By staying ahead of trends and leveraging innovation, we aim to be a global leader in our domain.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">Meet Our Team</h2>
                        <p>
                            Our team comprises talented developers, designers, strategists, and leaders who collaborate to bring
                            ideas to life. Together, we work hard to ensure every project exceeds expectations and delivers
                            unparalleled value.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
