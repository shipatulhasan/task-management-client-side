import React from 'react';
import { useSelector } from 'react-redux';
import MyTask from './MyTasks/MyTask';


const CompletedTask = () => {
    const {tasks} = useSelector(state=>state.tasks)

    const completed = tasks?.filter(task=>task.completed===true)
    return (
        <>
        {
            completed.length===0&& <div className='mx-auto w-full min-h-[60vh] h-full grid place-content-center'>
                <h2 className=" max-w-sm text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-normal text-center">
            You don't have any  {" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            task left.
            </span>
          </h2>
            </div>
        }
        <MyTask myTasks={completed} />
        </>
    );
};

export default CompletedTask;