import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink,Link } from 'react-router-dom';
import { authFunction } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const {userInfo} = useSelector(state=>state.auth) 


  const {logOut} = authFunction
  const handleLogout = ()=>{
    logOut()
    .then(()=>{
      localStorage.removeItem('task-token')
    })
    .catch(err=>console.error(err.message))
  }




    const menuList = <>
    <NavLink to='/'>
      {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
              } text-black px-3 py-1 list-none lg:mr-2  font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
            >
              Home
            </li>
          )}
      </NavLink>
    {
      userInfo?.uid ? <>
      <NavLink to='/addtask'>
      {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
              } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
            >
              Add Task
            </li>
          )}
      </NavLink>
      <NavLink to='/mytask'>
      {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
              } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
            >
              My Task
            </li>
          )}
      </NavLink>
      <NavLink to='/completed-task'>
      {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
              } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border  hover:border-opacity-100 border-blue-500 lg:mt-0`}
            >
              Completed task
            </li>
          )}
      </NavLink>
      <NavLink onClick={handleLogout}>
      {({ isActive }) => (
            <li
              className={`${
                isActive ? " border-opacity-0" : 'border-opacity-0'
              } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border hover:border-opacity-100 border-blue-500 lg:mt-0`}
            >
              Logout
            </li>
          )}
      </NavLink></> : 
      <NavLink to='/login'>
    {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-blue-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
            } text-black px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-blue-200 hover:bg-opacity-20 lg:border hover:border-opacity-100 border-blue-500 lg:mt-0`}
          >
            Login
          </li>
        )}
    </NavLink>
    }

    </>
    return (
        <nav className={` relative w-full  dark:bg-gray-800`}>
        <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between lg:flex-1 ">
                    <div className="text-xl font-semibold ">
                        <Link to='/' className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">Task manager</Link>
                   
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
                <div className={`${isOpen ?'translate-x-0 opacity-100 ': 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-11/12 mx-auto mt-2 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                    <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:mx-8 ">
                        {menuList}
                    </div>
                    {
                      userInfo?.uid && <div className="flex items-center my-4 mx-3 lg:my-0">
                      <div className="w-12 h-12 overflow-hidden border-2 border-gray-400 rounded-full">
                          <img src={userInfo?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                      </div>

                      <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{userInfo?.displayName}</h3>
                 
              </div>
                    }
                    
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;