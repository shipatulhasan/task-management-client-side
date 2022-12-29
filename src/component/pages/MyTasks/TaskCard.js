import React from "react";
import {FaRegTrashAlt} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

const TaskCard = ({ task, handleDelete, handleComplete, handleDetails,handleUpdate,handleInComplete }) => {
  const { _id, title, details,postDate } = task;
 

  return (
    <div className="max-w-2xl rounded shadow-lg shadow-slate-300 dark:bg-gray-800  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
      <div className="px-8 py-4 bg-white h-full rounded flex flex-col justify-between">
        <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold  text-yellow-600 dark:text-gray-400">
            {postDate}
          </span>
          {
            !task?.completed?<button
            onClick={() => handleComplete(_id)}
            className=" relative px-3 py-1 text-sm font-bold text-blue-900 transition-colors duration-300 transform bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200"
          >
            Complete
            <span className="flex h-2 w-2 absolute top-[-1px] right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
          </button>:<button
            onClick={() => handleInComplete(_id)}
            className=" relative px-3 py-1 text-sm font-bold text-red-900 transition-colors duration-300 transform bg-red-100 rounded-full cursor-pointer hover:bg-red-200"
          >
            Incomplete
            <span className="flex h-2 w-2 absolute top-[-1px] right-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
          </button>
          }
        </div>

        <div className="mt-2">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 ">
            {title.length>=24?title.slice(0,20)+'...':title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
              {details?.length>70 ? details.slice(0,70)+'...':details}</p>
        </div>
        {
          task?.image && <div className="mt-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded">
          <img src={task?.image} className="w-14 h-14 border border-white rounded" alt="" />
        </div>
        }
        
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={()=>handleDetails(_id)}
            className="text-sm bg-pink-100 px-3 py-1 rounded-full text-pink-900 font-bold dark:text-blue-400 hover:underline"
          >
            View Details
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleUpdate(_id)}
              className=" grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-purple-200 cursor-pointer hover:bg-purple-300 "
            >
              <FiEdit className="text-purple-800 hover:text-purple-900 font-extrabold"/>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-red-200 cursor-pointer hover:bg-red-300"
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
