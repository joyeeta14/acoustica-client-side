// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../SharedItems/Footer";

const Main = () => {
    return (
        <div>
            Mainnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;