import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios'
Link
const Course = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        const getbook = async () => {
            try {
                const res = await axios.get('https://kitaab-eosin.vercel.app/book');
                setbooks(res.data.book)
            }


            catch (err) {
                console.log(err)
            }
        }
        getbook();
    }, [])
    return (
        <>

            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='mt-28 items-center justify-center  text-center'>
                    <h1 className='text-2xl  md:text-4xl'>
                        We're delighted to have you{" "}
                        <span className='text-pink-500'>
                            Here:)
                        </span>
                    </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum
                        labore unde? Facilis, laudantium! Dicta repellat esse,
                        ea expedita consequuntur laborum quod nulla aperiam. Nesciunt itaque magnam repellendus pariatur ducimus sequi qui laudantium molestiae.
                    </p>
                    <Link to='/'>
                        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        books.map((item) => (
                            <Card key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;
