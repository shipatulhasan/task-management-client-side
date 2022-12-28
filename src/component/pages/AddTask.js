import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../Slices/taskSlice';
import LoaderText from '../LoaderText'

const AddTask = () => {  
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.tasks)
    const date = new Date().toLocaleString("en-US")
    const hadleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const title= form.title.value
        const details= form.details.value

        if(title === '' || details === ''){
            alert('please add the task information')
            return
        }

        const post = {
            title,details,postDate:date
        }
        dispatch(createTask(post))
        form.reset()
        
    }
  



    return (
       
            <div className="flex justify-center items-center min-h-[80vh] mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 border border-slate-200 shadow-xl shadow-slate-300">
              {/* {
                  error&&<p className='text-red-600 bg-red-200 p-2'>Something went wrong try agian latter</p>
              } */}
          <div className='flex items-center gap-3'>
          <h2 className='text-3xl font-bold text-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                Add Task
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
                placeholder="task name..."
                required
              />
            </div>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>
            <textarea
            
            name='details'
            required
            className="block rounded focus:outline-none w-full h-20 px-4 py-3 text-gray-800 text-sm "
            placeholder='task details...........'
          ></textarea>
            </div>

              

            <div className="mt-8">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-slate-700 focus:outline-none bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 border rounded py-4 w-full hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200"
                type="submit"
              >
                {isLoading ? <LoaderText /> : "Add Task"}
              </button>
            </div>
               
            </form>
        </div>

         
        </div>
    );
};

export default AddTask;