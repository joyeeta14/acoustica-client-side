import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Error from '../ErrorPage/Error';
import Login from '../LogReg/Login';
import Registration from '../LogReg/Registration';
import AddClasses from '../Components/AddClasses';

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
                element:<Registration></Registration>
            },
            {
                path:'/addClasses',
                element:<AddClasses></AddClasses>
            },
        ]
    },
    {
        path:'/*',
        element:<Error></Error>
    },
])

export default router;