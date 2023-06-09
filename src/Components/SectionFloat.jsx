// import React from 'react';

const SectionFloat = () => {
    return (
        <div className=" w-50 mx-auto px-40 -mt-32">
            <div className="hero py-20 bg-gray-300">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Opening Offer!</h1>
                        <h1 className="text-5xl pt-2 font-bold">Get A Free Lesson</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
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
        </div>
    );
};

export default SectionFloat;