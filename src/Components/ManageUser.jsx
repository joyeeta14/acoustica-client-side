// import React from 'react';

import { useEffect, useState } from "react";
import Table from "./Table";
// import Table from "./Table";

const ManageUser = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    } ,[])

    return (
        <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        {
        users.map(user => <Table key={user._id} user={user}></Table>)
        }
          </tbody>
        </table>
      </div>
    );
};

export default ManageUser;
