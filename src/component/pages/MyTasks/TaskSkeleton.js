import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TaskSkeleton = () => {
    return (
        Array(3).fill(0).map((_,i)=> <div key={i} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-lg shadow-slate-300 dark:bg-gray-800 border border-slate-300">
        <div className="flex items-center justify-between gap-8">
            <div className='w-full'>
            <Skeleton />
            </div>
            <div className='w-full text-right'>
            <Skeleton count={.5} />
            </div>
           
        </div>
    
        <div className="mt-2">
           <Skeleton />
           <div>
               <Skeleton count={2} style={{marginTop:'2px'}} />
           </div>
        </div>
    
        <div className="flex gap-5 items-center justify-between mt-4">
            
                <div className='w-full'>
                <Skeleton count={.5} />
                </div>
    
            <div className="w-full flex items-center gap-5">
                
                <div className='w-full'>
                <Skeleton />
                </div>
                <div className='w-full'>
                <Skeleton />
                </div>
            </div>
        </div>
    </div>
    )
 
        
    );
};

export default TaskSkeleton;