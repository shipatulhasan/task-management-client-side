import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/pages/AddTask";
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
        ]
    }
])