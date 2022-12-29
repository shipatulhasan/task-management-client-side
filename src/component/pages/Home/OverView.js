import React from 'react';
import img from '../../../asset/mytask.jpg'

const OverView = () => {
    return (
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
                You can view all<br/>{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  your task here
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
               This task manager is so flexible and easy to use. To use it you have to signin first then you can see all your added and inclompleted task here.
              </p>
            </div>
            
          </div>
          <div className="relative lg:w-1/2 border border-slate-200 rounded">
            <img
              className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
              src={img}
              alt=""
            />
       
          </div>
        </div>
      </div>
    );
};

export default OverView;

