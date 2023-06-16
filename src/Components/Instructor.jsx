// import React from 'react';

import { useLoaderData } from "react-router-dom";
// import CardClass from "./CardClass";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
    const instructors = useLoaderData();
    console.log(instructors);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:ps-10 md:py-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
            {
                instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard> )
            }
        </div>
    );
};

export default Instructor;