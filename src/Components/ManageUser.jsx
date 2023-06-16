// import React from 'react';

import { useEffect, useState } from "react";
import Table from "./Table";
// import Table from "./Table";
import { Fade } from "react-awesome-reveal";


const ManageUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(' https://acoustica-server-side.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="py-10 font-semibold text-white bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
            <Fade>
            <div className=" overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white text-base">
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
            </Fade>
        </div>

    );
};

export default ManageUser;
