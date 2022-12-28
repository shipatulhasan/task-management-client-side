import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/pages/AddTask";
import Login from "../component/pages/Forms/Login";
import Registration from "../component/pages/Forms/Registration";
import MyTask from "../component/pages/MyTasks/MyTask";
import Main from "../Laouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<MyTask />
            },
            {
                path:'/addtask',
                element:<AddTask />
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