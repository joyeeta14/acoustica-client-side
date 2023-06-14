// import React from 'react';
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div>
        <img className="w-50" src="https://static.vecteezy.com/system/resources/previews/003/659/874/original/acoustic-guitar-silhouette-design-free-vector.jpg" alt="" />
      </div>
      <div className="text-center">
      <div>
        <h1 className="-mt-96 font-bold text-white text-5xl">Error 404 Not Found</h1>
      </div>
        <Link to='/'>
          <button className="btn mt-10 btn-neutral font-semibold">Home Page</button>
        </Link>
        <div className="flex">

        </div>
      </div>
    </div>
  );
};

export default Error;