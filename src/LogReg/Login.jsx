// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider,getAuth, signInWithPopup  } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {   

    const info = useContext(AuthContext);
    const {userLogin}=info;

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathName || '/' ;
    
    const handlerGoogle = (event) => {
        event.preventDefault();

        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            if(user){
                Swal.fire(
                    'Logged In!',
                    'You have signed in successfully!',
                    'success'
                  );
            }
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

          });
    }

    const handleLogin =(event)  =>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            Swal.fire(
              'Error!',
              'You have to fill all the boxes!',
              'error'
            )
            return;
          }

        userLogin(email,password)
        .then(result => {
            const user = result.user;
            if(user){
                Swal.fire(
                    'Logged In!',
                    'You have signed in successfully!',
                    'success'
                  );
            }
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error.message))
    }


    return (
        <div className="w-100 mx-auto">
            <div className="hero  pt-5 min-h-screen bg-[url('https://media.istockphoto.com/id/473498098/photo/black-acoustical-guitar-on-black-background.jpg?s=612x612&w=0&k=20&c=gYSbBeLRK7NuaQUL1HPrayY9ivCoEj08twFLuK6tqEs=')]">
                <div className="hero mt-10 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <input className="btn btn-neutral" type="submit" value="Login" />
                                </div>
                                <div className="divider">OR</div>
                                <div className="form-control">
                                    <button onClick={handlerGoogle} className="btn btn-outline btn-neutral flex "><p>Sign In with Google</p>
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