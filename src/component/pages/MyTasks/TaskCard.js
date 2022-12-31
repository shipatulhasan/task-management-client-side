import React, { useState } from "react";
import {FaPlus, FaRegTrashAlt} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import AddTask from "../AddTask";
import {GoComment} from 'react-icons/go'

const TaskCard = ({ task, handleDelete, handleComplete, handleDetails,handleModal,handleInComplete,handleAddDetails,isLoading }) => {
  const { _id, title, details,postDate } = task;
  const [isOpen,setIsOpen] = useState(false)
 

  return (
    <div>

    <div className="max-w-2xl rounded shadow-lg shadow-slate-300 dark:bg-gray-800  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] transition-all duration-300 ease-in-out">
      <div className="px-8 py-4 bg-white min-h-[176px] rounded flex flex-col justify-between transition-all duration-300 ease-in-out">
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
          task?.image && <div className="mt-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded hover:cursor-pointer">
            <PhotoProvider>
            <PhotoView src={task.image}>
            <img src={task.image} className="w-14 h-14 border border-white rounded" alt="" />
            </PhotoView>
            </PhotoProvider>
          
        </div>
        }
        {
          isOpen &&<div className={`${isOpen?"translate-y-0 opacity-100":'-translate-y-full opacity-0'} transition-all duration-300 ease-in-out`}>
            {
              !task?.completed&&<AddTask _id={_id} handleAddDetails ={handleAddDetails} isLoading={isLoading} />
            }
          
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
            {
              !task?.completed ? <button
              onClick={()=>setIsOpen(!isOpen)}
              className=" grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-slate-200 cursor-pointer hover:bg-slate-300 " title="Add section"
            >
              <FaPlus className="text-slate-800 hover:text-slate-900 font-extrabold"/>
            </button>
            :
            <button
            onClick={() => handleDetails(_id)}
            className=" grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-purple-200 cursor-pointer hover:bg-purple-300 "
          >
            <GoComment className="text-slate-800 hover:text-slate-900 font-extrabold"/>
          </button>

            }
          
            <button
              onClick={() => handleModal(_id)}
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
    </div>
  );
};

export default TaskCard;
