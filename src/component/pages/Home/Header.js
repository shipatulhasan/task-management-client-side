import React from 'react';

const Header = () => {
    return (
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="flex flex-col items-center justify-between text-center gap-5">
          <div className="mb-12 lg:max-w-lg  lg:mb-0">
            <div className="max-w-2xl mb-6  ">

              <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 md:text-5xl sm:leading-normal">
                Wellcome to {' '}
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  task manager
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Add your daily task and track them. It's very easy to use and help people to track there daily task.
              </p>
            </div>
        
          </div>
       
        </div>
      </div>
    );
};

export default Header;