import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </>
    );
}

export default Home;
