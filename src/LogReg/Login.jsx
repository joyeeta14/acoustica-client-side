// import React from 'react';

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <div className="w-100 mx-auto">
            <div className="hero  pt-5 min-h-screen bg-[url('https://i.ibb.co/vY5hwZM/pexels-skylar-kang-6044820.jpg')]">
                <div className="hero mt-10 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className="form-control">
                                    <button className="btn btn-outline btn-neutral flex "><p>Sign In with Google</p>
                                        <FcGoogle />
                                    </button>
                                </div>
                                <div className="form-control mt-6">
                                    <p>New Here? Please <Link className="link link-hover text-lg link-neutral " to='/registration'>Register </Link>Here</p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;