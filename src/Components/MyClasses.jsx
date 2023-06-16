// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);


  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(` https://acoustica-server-side.vercel.app/addClasses/${user?.email}`)
      .then(res => res.json())
      .then(data =>setClasses(data))
  }, [user])

  return (
    <div className="py-10 font-semibold text-white bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
      <div className="overflow-x-auto mt-20">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-white text-base">
              <th></th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td> {classes.className} </td>
              <td> {classes.instructorName} </td>
              <td> {classes.instructorEmail} </td>
              <td> {classes.price} </td>
              <td> {classes.status} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;