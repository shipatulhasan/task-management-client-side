import React,{useState} from 'react';
import { FiImage } from 'react-icons/fi';

import LoaderText from '../Shared/Spinner/LoaderText'
import { usePreview } from '../../Hooks/usePreview';

const AddTask = ({_id,handleAddDetails,isLoading}) => {  
    const [preview,handleChange] = usePreview()
    const [text,setText] = useState('')
    


    return (
       
         
        <div className="w-full space-y-3 text-gray-800">
              {/* {
                  error&&<p className='text-red-600 bg-red-200 p-2'>Something went wrong try agian latter</p>
              } */}
     
        <form onSubmit={(e)=>handleAddDetails(e,_id)} className='space-y-5 py-5'>
          
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>
            <textarea
            
            name='details'
            onChange={(e)=>setText(e.target.value)}
            className="block rounded focus:outline-none w-full h-20 px-4 py-3 text-gray-800 text-sm "
            placeholder='task details...........'
          ></textarea>
            </div>

            <div className="flex gap-3 items-center">
            <label className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded inline-block hover:cursor-pointer relative p-[1px]">
              <input
                className="px-4 py-3 text-gray-800 border rounded w-0 h-0"
                type="file"
                name="image"
                onChange={(e)=>handleChange(e.target.files[0])}
              />
              <div className="absolute inset-0 m-[1px] bg-white p-2 text-slate-700 font-xl rounded">
                <FiImage className="text-xl" />
              </div>
            </label>
            {
              preview && <div className="mt-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded hover:cursor-pointer">

              <img src={preview} className="w-14 h-14 border border-white rounded" alt="" />
              </div>
            }
          </div>  

            {
              text || preview ? <div className="mt-8">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-slate-700 focus:outline-none bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 border rounded py-4 w-full hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200"
                type="submit"
              >
                {isLoading ? <LoaderText /> : "Add Task"}
              </button>
            </div>
            :
            <></>
            }
               
            </form>
        </div>

     
    );
};

export default AddTask;