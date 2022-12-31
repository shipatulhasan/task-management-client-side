import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import MyComment from "../MyComments/MyComments";


const DetailsTask = ({
  taskDetails,
  setShow,
  show,
  handleDelete,
  handleComplete,
  handleModal,
  handleInComplete
}) => {
  const { _id, title, details, postDate } = taskDetails;
  return (
    
      <>
        {show && (
          <div
            className="py-12 bg-gray-700 bg-opacity-50 dark:bg-gray-900 transition duration-150 ease-in-out absolute top-0 right-0 bottom-0 left-0 z-10"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 grid place-content-center min-h-[80vh] text-center"
            >
              <div className="relative py-8 px-8 md:px-16 md:w-[500px] w-[400px] bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 space-y-6 max-h-[400px] overflow-y-scroll">
                <div className="space-y-5 text-center">
                  <p className="text-sm  font-semibold  text-yellow-600 dark:text-gray-400">
                    {postDate}
                  </p>
                  {
            !taskDetails?.completed?<button
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
                {
          taskDetails?.image && <div className="mt-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded hover:cursor-pointer">
            <PhotoProvider>
            <PhotoView src={taskDetails?.image}>
            <img src={taskDetails?.image} className="w-14 h-14 border border-white rounded" alt="" />
            </PhotoView>
            </PhotoProvider>
          
        </div>
        }
                <div className="text-center">
                  <h1 className=" text-slate-800 dark:text-gray-100 text-2xl font-bold tracking-normal leading-tight mb-4">
                    {title}
                  </h1>
                  <p className="mb-5  text-gray-600 dark:text-gray-400  font-normal">
                    {details}
                  </p>
                </div>
                {
                  taskDetails?.completed && <MyComment id={_id} />
                }
                <div className="flex items-center gap-4 justify-center">
                  <button
                    onClick={() => handleModal(_id)}
                    className=" grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-purple-200 cursor-pointer hover:bg-purple-300 "
                  >
                    <FiEdit className="text-purple-800 hover:text-purple-900 font-extrabold" />
                  </button>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="grid place-content-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300 transform bg-red-200 cursor-pointer hover:bg-red-300"
                  >
                    <FaRegTrashAlt className="text-red-800 hover:text-red-900 font-extrabold" />
                  </button>
                </div>
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </>

  );
};

export default DetailsTask;
