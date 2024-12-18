import React from 'react';
import banner from '/public/banner.png'
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                <div className=' order-2 md:order-1 w-full wd:w-1/2 mt-12 md:mt-32'>
                    <div className="space-y-12">
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi nisi placeat unde cumque ducimus fugit consequuntur obcaecati ipsam recusandae magni alias at facere corrupti reprehenderit quod, tempore eligendi.</p>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="daisy@site.com" />
                        </label>
                    </div>
                    <button className="mt-6 btn btn-secondary">Secondary</button>

                </div>

                <div className='md:mt-40 order-1 w-full wd:w-1/2'>
                    <img src={banner} className=" md:ml-16 md:w-[500px]  md:h-[400px] " alt="" srcSet="" />
                </div>
            </div >
        </>
    );
}

export default Banner;
