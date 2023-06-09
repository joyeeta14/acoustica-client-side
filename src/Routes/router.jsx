import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Error from '../ErrorPage/Error';
import Login from '../LogReg/Login';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    },
])

export default router;