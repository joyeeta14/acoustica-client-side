// import React from 'react';

const CardClass = ({data}) => {
    return (
        <div>
        <div className="card mt-40 card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={data.classPic} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {data.className}</h2>
                <h2 className="card-title">Instructor: {data.instructorName}</h2>
                <h2 className="card-title">Available Seats: {data.seats}</h2>
                <h2 className="card-title">Price: {data.price}</h2>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Select</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardClass;