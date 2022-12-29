import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/pages/AddTask";
import CompletedTask from "../component/pages/CompletedTasks";
import Login from "../component/pages/Forms/Login";
import Registration from "../component/pages/Forms/Registration";
import InCompleteTasks from "../component/pages/InCompleteTasks";
import Home from '../component/pages/Home/Home'
import Main from "../Laouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/mytask',
                element:<PrivateRoute><InCompleteTasks/></PrivateRoute>
            },
            {
                path:'/addtask',
                element:<PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path:'/completed-task',
                element:<PrivateRoute><CompletedTask /></PrivateRoute>
            },
            {
                path:'/signup',
                element:<Registration />
            },
            {
                path:'/login',
                element:<Login />
            },
        ]
    }
])