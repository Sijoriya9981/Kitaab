import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Course from '../components/course';

const Courses = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    );
}

export default Courses;
