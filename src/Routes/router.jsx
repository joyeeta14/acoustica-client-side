import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Error from '../ErrorPage/Error';
import Login from '../LogReg/Login';
import Registration from '../LogReg/Registration';
import AddClasses from '../Components/AddClasses';
import MyClasses from '../Components/MyClasses';
import ManageUser from '../Components/ManageUser';
import ManageClasses from '../Components/ManageClasses';
import Database from '../Components/Database';
import NotFoundPage from '../ErrorPage/404page';

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
            {
                path:'/myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path:'/manageUser',
                element: <ManageUser></ManageUser>,
                
            },
            {
                path:'/database',
                element: <Database></Database>,
                
            },
            {
                path:'/manageClasses',
                element: <ManageClasses></ManageClasses>,
                loader: ()=>fetch(' https://acoustica-server-side.vercel.app/addClasses')
                
            },
        ]
    },
    {
        path:'/*',
        element:<NotFoundPage></NotFoundPage>
    },
])

export default router;