import React from 'react';
import { Fade } from "react-awesome-reveal";

const ClassesGrid = ({cls}) => {
    return (
  <Fade>
          <div className='mx-10'>
            <img className='w-50 h-50' src={cls.classPic} alt="" />
        </div>
  </Fade>
    );
};

export default ClassesGrid;