// import React from 'react';

import PopularClasses from "../Popular Sections/PopularClasses";
import PopularInstructors from "../Popular Sections/PopularInstructors";
import Slider from "../Slider/Slider";
import TopSlider from "../Slider/TopSlider";
import Banner from "./Banner";
import SectionFloat from "./SectionFloat";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionFloat></SectionFloat>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Slider></Slider>
        </div>
    );
};

export default Home;