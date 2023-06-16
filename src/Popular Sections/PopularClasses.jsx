// import React from 'react';

import { useEffect, useState } from "react";
import ClassesGrid from "./ClassesGrid";


const PopularClasses = () => {

    const [popClass, setPopClass]=useState([]);
    useEffect(()=>{
        fetch('https://acoustica-server-side.vercel.app/addClasses')
        .then(res => res.json())
        .then(data => setPopClass(data))
    } ,[])

    return (
        <div>
            <div className="text-5xl mb-20 mt-10 font-bold text-center">
               Popular Classes
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                popClass.slice(0,6).map (cls => <ClassesGrid key={cls._id} cls={cls}></ClassesGrid>)
            }
            </div>
        </div>
    );
};

export default PopularClasses;