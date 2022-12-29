import React from 'react';
import img from '../../../asset/overview-2-1.jpg'
import img2 from '../../../asset/overview-2-2.jpg'

const Overview2 = () => {
    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="flex flex-col items-center justify-between lg:flex-row">

        <div className="relative lg:w-1/2 border border-slate-200 rounded shadow-lg">
            <img
              className=" object-contain w-full  h-56 sm:h-96 rounded "
              src={img}
              alt=""
            />
            <img
              className="absolute bottom-0 right-[-25px] object-contain w-72 h-56 rounded "
              src={img2}
              alt=""
            />
       
          </div>



          <div className="pt-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
                You can add task and<br/>{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  save your complete task.
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
               Here you can add task with or without media. Also you can make your task as complete and view them in your complete task rote and many more features...
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    );
};

export default Overview2;