import React, { useState } from 'react';
import LoaderText from '../../Shared/Spinner/LoaderText'

const CommentForm = ({handleComment,isLoading}) => {
    const [text,setText] = useState('')
    return (
        <div className="w-full space-y-3 text-gray-800">
            
     
        <form onSubmit={(e)=>handleComment(e)} className='space-y-5 py-5'>
          
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>
            <textarea
            
            name='comment'
            onChange={(e)=>setText(e.target.value)}
            className="block rounded focus:outline-none w-full h-20 px-4 py-3 text-gray-800 text-sm "
            placeholder='write your comment...........'
          ></textarea>
            </div>


            {
              text && <div className="mt-8 text-right">
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-slate-700 focus:outline-none bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 border rounded  hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200 px-3 py-2"
                type="submit"
              >
                {isLoading ? <LoaderText /> : "Comment"}
              </button>
            </div>
           
            }
               
            </form>
        </div>
    );
};

export default CommentForm;