import React, { useState, useEffect } from 'react';
import "./hero.css"
import { Link } from 'react-router-dom'



const Hero = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const items = ['Learn', 'Code', 'Debug'];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem + 1) % items.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);


    return (

        <section className='md:py-24 py-10 flex justify-center items-center '>
            <div className="flex lg:px-10 p-4 items-center justify-center md:flex-row flex-col-reverse ">
                <div className="md:w-1/2 flex flex-col">
                    <p className='font-bold my-5 ml-3'>Welcome to The Coding Bytes</p>
                    <h1 className="title-font lg:text-5xl text-4xl mb-4 font-bold">
                        Hey Coders, Let's <span>{items[currentItem]}</span>

                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">
                        "Everybody should learn to program a computer, because it teaches you how to think." <br />- Steve Jobs
                    </p>
                    <div className='flex flex-col text-center gap-3 lg:flex-row'>
                        <Link className="bg-gray-200 border-0 py-2 px-6 focus:outline-none text-black hover:text-yellow-500 rounded-full font-bold lg:w-fit " to={"/courses"}>
                            Courses
                        </Link>
                        <Link className=" bg-gray-700 text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded-full font-bold lg:w-fit" to={"/jobs"}>
                            Jobs
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 lg:p-20">
                    <img
                        alt="hero"
                        src="/hero.svg"
                        height="100%"
                        width="100%"
                    />
                </div>
            </div>
        </section>

    )
}

export default Hero