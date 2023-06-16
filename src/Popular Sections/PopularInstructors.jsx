import React, { useEffect, useState } from 'react';

import InstructorGrid from './InstructorGrid';

const PopularInstructors = () => {
    
    const [popInstructors, setPopInstructors]=useState([]);
    useEffect(()=>{
        fetch('https://acoustica-server-side.vercel.app/instructors')
        .then(res => res.json())
        .then(data => setPopInstructors(data))
    } ,[])

    return (
        <div className='mb-20'>
            <div className="text-5xl mb-20 mt-10 font-bold text-center">
               Popular Instructors
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                popInstructors.slice(0,6).map(instructor => <InstructorGrid key={instructor._id} instructor={instructor}></InstructorGrid>)
            }
            </div>
        </div>
    );
};

export default PopularInstructors;