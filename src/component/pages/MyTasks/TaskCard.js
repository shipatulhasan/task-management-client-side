import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({task,handleDelete}) => {
    const {_id,title,details} = task
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-lg shadow-slate-300 dark:bg-gray-800 border border-slate-300">
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
            <button onClick={()=>handleDelete(_id)} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" >Delete</button>
        </div>
    
        <div className="mt-2">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 " >{title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{details}</p>
        </div>
    
        <div className="flex items-center justify-between mt-4">
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline" >Read more</Link>
    
            <div className="flex items-center">
                <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar"/>
                <Link className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Khatab wedaa</Link>
            </div>
        </div>
    </div>
    );
};

export default TaskCard;