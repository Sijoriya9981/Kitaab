import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Course from '../components/course.jsx';

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
