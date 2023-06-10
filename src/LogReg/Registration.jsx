// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";



const Registration = () => {

    const {userRegister}=useContext(AuthContext);

    const registerHandler= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const url = form.url.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!email,password,name,url) {
            Swal.fire(
              'Error!',
              'You have to fill all the boxes!',
              'error'
            )
            return;
          }
        
       else if (!/(?=.*[!@#$&*])(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            Swal.fire(
              'Weak Password!',
              'Your password must contain Minimum six characters, at least one uppercase letter and one special character!',
              'error'
            )
            return;
          }

        else if(password !== confirmPassword){
            Swal.fire(
                ' Wrong Password!',
                'Confirm your password properly!',
                'error'
              );
              return;
        }

        userRegister(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="hero min-h-screen  bg-[url('https://i.ibb.co/vY5hwZM/pexels-skylar-kang-6044820.jpg')] py-10 px-28">
                <div className="hero-content mt-10  flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <form onSubmit={registerHandler} className="card-body px-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="url" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">
                                    Register
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <p>Already registered? <Link className="text-lg link link-hover link-neutral" to='/login'>Login</Link> here! </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;