// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const AddClasses = () => {

    const { user } = useContext(AuthContext);

    const addClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const classPic = form.classPic.value;
        const instructorName = user.displayName;
        const instructorEmail = user.email;
        const seats = form.seats.value;
        const price = form.price.value;
        const status = "pending";
        const enroll = parseFloat(form.enroll.value);

        const classInfo = { className, classPic, instructorName, instructorEmail, seats, price, status, enroll };

        fetch(' https://acoustica-server-side.vercel.app/addClasses', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(classInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Class Added !',
                        'You have added classes successfully!',
                        'success'
                    );
                }
            })
    }

    return (
        <Fade>
            <div className="pt-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0q9MM_Yn4Ho8dPwMoj5yNQweFdouJ4BcxRxuR1d&s')]">
                <div>
                    <div className=" px-32 py-20 flex-col lg:flex-row-reverse">
                        <div className="card  w-full shadow-2xl bg-base-100">
                            <form onSubmit={addClass} className="card-body ">
                                <div className=" grid gap-4 grid-cols-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Class Name</span>
                                        </label>
                                        <input type="text" name="className" placeholder="Class Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Class Picture
                                            </span>
                                        </label>
                                        <input type="url" name="classPic" placeholder="Class picture" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Instructor Name</span>
                                        </label>
                                        <input type="text" readOnly name="instructorName"
                                            placeholder={user?.displayName} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Instructor Email</span>
                                        </label>
                                        <input type="email" readOnly name="instructorEmail" placeholder={user?.email} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Seats</span>
                                        </label>
                                        <input type="number" name="seats" placeholder="Available Seats" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="$ Price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Status</span>
                                        </label>
                                        <input type="text" name="status" placeholder="Status" readOnly value='pending' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Enroll</span>
                                        </label>
                                        <input type="text" name="enroll" placeholder="Enroll" defaultValue={0} className="input input-bordered" />
                                    </div>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default AddClasses;