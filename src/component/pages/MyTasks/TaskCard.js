import React from "react";
import { Link } from "react-router-dom";
import {FaRegTrashAlt} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

const TaskCard = ({ task, handleDelete, handleComplete }) => {
  const { _id, title, details,postDate } = task;
 

  return (
    <div className="max-w-2xl rounded shadow-lg shadow-slate-300 dark:bg-gray-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
      <div className="px-8 py-4 bg-white h-full rounded flex flex-col justify-between">
        <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {postDate}
          </span>
          <button
            onClick={() => handleComplete(_id)}
            className=" relative px-3 py-1 text-sm font-bold text-blue-900 transition-colors duration-300 transform bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200"
          >
            Complete
            <span className="flex h-2 w-2 absolute top-[-1px] right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
          </button>
        </div>

        <div className="mt-2">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{details}</p>
        </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Link
            to="/"
            className="text-purple-600 font-bold dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className=" grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-purple-200 cursor-pointer hover:bg-purple-300 "
            >
              <FiEdit className="text-purple-800 hover:text-purple-900 font-extrabold"/>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-red-200 cursor-pointer hover:bg-red-300 "
            >
              <FaRegTrashAlt className="text-red-800 hover:text-red-900 font-extrabold"/>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
