// import React from 'react';

import { Fade } from "react-awesome-reveal";


const SectionFloat = () => {
    return (
        <div className=" w-50 mx-auto lg:px-40 -mt-32">
            <Fade>
            <div className="hero py-20 bg-gray-300">
            <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-3xl text-center font-bold">Opening Offer!</h1>
                        <h1 className=" text-5xl pt-2 font-lg md:font-bold lg:font-bold">Get A Free Lesson</h1>
                        <p className="py-6">Are you new here? Explore our lessons for free on your first time.Give a shot to us and practice everyday with patience. </p>
                        
                        <div className="flex mx-24">
                        <button
                                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 me-5"
                            >
                            Get Started
                            </button>
                        <button
                                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                            >
                           Choose Classes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default SectionFloat;