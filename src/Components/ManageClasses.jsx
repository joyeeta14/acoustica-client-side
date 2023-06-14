// import React from 'react';

import { useLoaderData } from "react-router-dom";
// import Table from "./Table";
import ClassTable from "./ClassTable";



const ManageClasses = () => {
    const classes = useLoaderData();



    return (
        <div 
        className="py-10 font-semibold text-white bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
            <div className=" overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white text-base">
                            <th>Class Pic</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(cls => <ClassTable key={cls._id} cls={cls}></ClassTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageClasses;
