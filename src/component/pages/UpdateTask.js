import React from 'react';
import LoaderText from '../LoaderText'

const UpdateTask = ({show,setShow,isLoading,task}) => {
    const {title,details} = task
    const date = new Date().toLocaleString("en-US")
    
    const hadleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const title= form.title.value
        const details= form.details.value
        const post = {
            title,details,postDate:date
        }
    }

    return (
        <>
        {show && (
          <div
            className="py-12 bg-gray-700 bg-opacity-50 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 grid place-content-center min-h-[80vh] "
            >
              <div className="relative py-8 px-8 md:w-[500px] w-[400px] bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 space-y-6 ">
              <div className='flex items-center gap-3'>
          <h2 className='text-3xl font-bold text-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                Update Task
            </h2>
            <div className='h-[2px] w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1'/>
          </div>
        <form action="" onSubmit={hadleSubmit} className='space-y-5 py-5'>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>

                <input
                className="w-full px-4 py-3 text-gray-800 border focus:outline-none rounded "
                id="phone"
                type="text"
                name='title'
                defaultValue={title}
                placeholder="task name..."
                required
              />
            </div>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>
            <textarea
            
            name='details'
            required
            defaultValue={details}
            className="block rounded focus:outline-none w-full h-20 px-4 py-3 text-gray-800 text-sm "
            placeholder='task details...........'
          ></textarea>
            </div>

              

            <div className="mt-8">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-slate-700 focus:outline-none bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 border rounded py-4 w-full hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200"
                type="submit"
              >
                {isLoading ? <LoaderText /> : "Update Task"}
              </button>
            </div>
               
            </form>
               
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

export default UpdateTask;