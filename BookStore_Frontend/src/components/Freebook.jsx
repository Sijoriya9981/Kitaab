import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
const Freebook = () => {
    const [book, setbook] = useState([])
    useEffect(() => {
        const getfreebook = async (req, res) => {
            try {

                const free = await axios('https://kitaab-eosin.vercel.app/book');

                setbook(free.data.book)
            }
            catch (err) {
                console.log(err)
            }

        }
        getfreebook();
    })
    const filterData = book.filter((data) => data.category === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>

                    <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolorem eos mollitia neque amet a alias. Laboriosam expedita, libero laudantium</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item, index) => (
                            <Card key={item._id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
