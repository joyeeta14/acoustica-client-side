// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const MyClasses = () => {
    const {user} = useContext(AuthContext);

    const [classes, setClasses]=useState([]);
    useEffect( ()=> {
        fetch(`http://localhost:5000/addClasses/${user?.email}`)
        .then(res=>res.json())
        .then(data => setClasses(data))
    } ,[user])

    return (
        <div className="my-20">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
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