// import React from 'react';

import { useLoaderData } from "react-router-dom";
import CardClass from "./CardClass";

const ApprovedClasses = () => {

    const approvedData = useLoaderData();
    // console.log(approvedData);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:ps-10 md:py-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
            {
                approvedData.map(data => <CardClass key={data._id} data={data}></CardClass>)
            }
        </div>
    );
};

export default ApprovedClasses;