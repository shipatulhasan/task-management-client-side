import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const menuList = <>
    <NavLink to='/'>
    {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
            } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
          >
            My Task
          </li>
        )}
    </NavLink>
    <NavLink to='/addtask'>
    {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
            } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
          >
            Add Task
          </li>
        )}
    </NavLink>

    </>
    return (
        <nav className={` relative bg-white border-b  dark:bg-gray-800`}>
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <p className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Task manager</p>
                    </div>
    
                    {/* <!-- Mobile menu button --> */}
                    <div className="flex lg:hidden">
                        <button onClick={()=>setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        
                            {
                                isOpen?<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>:<svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            }
                            
                    
                         
                        </button>
                    </div>
                </div>
    
                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={`${isOpen ?'translate-x-0 opacity-100 ': 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                    <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                        {menuList}
                    </div>
    
                    <div className="flex items-center mt-4 lg:mt-0">
    
                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                            </div>
    
                            <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;