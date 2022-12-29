import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/pages/AddTask";
import CompletedTask from "../component/pages/CompletedTasks";
import Login from "../component/pages/Forms/Login";
import Registration from "../component/pages/Forms/Registration";
import InCompleteTasks from "../component/pages/InCompleteTasks";
import Main from "../Laouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<InCompleteTasks />
            },
            {
                path:'/addtask',
                element:<AddTask />
            },
            {
                path:'/completed',
                element:<CompletedTask />
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