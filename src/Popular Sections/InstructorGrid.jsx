// import React from 'react';
import { Fade } from "react-awesome-reveal";

const InstructorGrid = ({instructor}) => {
    return (
<Fade>
<div className='mx-10'>
            <img className='w-50 h-50' src={instructor.url} alt="" />
        </div>
</Fade>
    );
};

export default InstructorGrid;