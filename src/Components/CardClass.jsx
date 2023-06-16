// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const CardClass = ({ data }) => {
    const { user } = useContext(AuthContext);

    const func = () => {
        Swal.fire(
            'Class Selected!',
            'You have selected this class successfully!',
            'success'
        );
    }
    const log = () => {
        Swal.fire(
            'Not logged in yet?',
            'You need to log in first!',
            'error'
        );
    }

    return (
  <Fade>
               <div className={data.seats == 0 ? "card bg-red-400 mt-40 card-compact lg:w-96 mx-20 lg:mx-0 my-20 shadow-xl" : "card mt-40 card-compact lg:w-96 mx-20 lg:mx-0 my-20  bg-base-100 shadow-xl"}>
                <figure><img src={data.classPic} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {data.className}</h2>
                    <h2 className="card-title">Instructor: {data.instructorName}</h2>
                    <h2 className="card-title">Available Seats: {data.seats}</h2>
                    <h2 className="card-title">Price: {data.price}</h2>

                    {!user ?
                        <div className="card-actions justify-end">
                            <button onClick={log} className="btn btn-neutral">
                                <Link to='/login'>Select</Link>
                            </button>
                        </div>
                        :
                        data.seats == 0 ? 
                        <div className="card-actions justify-end">
                            <button disabled className="btn btn-neutral">
                                Select
                            </button>
                        </div>
                        :
                        <div className="card-actions justify-end">
                        <button onClick={func} className="btn btn-neutral">
                            Select
                        </button>
                    </div>
                    }
                </div>
            </div>
  </Fade>
    );
};

export default CardClass;