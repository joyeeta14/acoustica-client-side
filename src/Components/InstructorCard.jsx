import React from 'react';
import { Fade } from "react-awesome-reveal";

const InstructorCard = ({instructor}) => {
    return (
  <Fade>
          <div className="card mt-40 card-compact mx-28 relative lg:mx-3 lg:me-96 my-20 w-96 bg-base-100 shadow-xl">
            <figure  className='w-50 mx-auto'><img src={instructor.url} alt="" /></figure>
            <div className="card-body py-20">
                <h2 className="card-title">Name: {instructor.name}</h2>
                <h2 className="card-title">Email: {instructor.email}</h2>
            </div>
        </div>
  </Fade>
    );
};

export default InstructorCard;