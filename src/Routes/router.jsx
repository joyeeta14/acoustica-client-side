
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Login from '../LogReg/Login';
import Registration from '../LogReg/Registration';
import AddClasses from '../Components/AddClasses';
import MyClasses from '../Components/MyClasses';
import ManageUser from '../Components/ManageUser';
import ManageClasses from '../Components/ManageClasses';
import ApprovedClasses from '../Components/ApprovedClasses';
import Database from '../Components/Database';
import NotFoundPage from '../ErrorPage/404page';
import Instructor from '../Components/Instructor';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
                element:<ProtectedRoute><AddClasses></AddClasses></ProtectedRoute>
            },
            {
                path:'/myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path:'/manageUser',
                element: <ProtectedRoute><ManageUser></ManageUser></ProtectedRoute> ,
               
                
            },
            {
                path:'/database',
                element:<ProtectedRoute> <Database></Database></ProtectedRoute>,
                
            },
            {
                path:'/manageClasses',
                element: <ProtectedRoute><ManageClasses></ManageClasses></ProtectedRoute>,
                loader: ()=>fetch(' https://acoustica-server-side.vercel.app/addClasses')
                
            },
            {
                path:'/approvedClasses',
                element: <ProtectedRoute><ApprovedClasses></ApprovedClasses></ProtectedRoute>,
                loader: ()=>fetch('https://acoustica-server-side.vercel.app/approvedClasses')
                
            },
            {
                path:'/instructors',
                element: <ProtectedRoute><Instructor></Instructor></ProtectedRoute>,
                loader: ()=>fetch('https://acoustica-server-side.vercel.app/instructors')
                
            },
        ]
    },
    {
        path:'/*',
        element:<NotFoundPage></NotFoundPage>
    },
])

export default router;