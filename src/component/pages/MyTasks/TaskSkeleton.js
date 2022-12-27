import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TaskSkeleton = () => {
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-lg shadow-slate-300 dark:bg-gray-800 border border-slate-300">
        <div className="flex items-center justify-between">
            <Skeleton count={.5}/>
           <Skeleton count={.5} />
        </div>
    
        <div className="mt-2">
           <Skeleton />
           <div>
               <Skeleton count={2} style={{marginTop:'2px'}} />
           </div>
        </div>
    
        <div className="flex items-center justify-between mt-4">
            
                <Skeleton count={.5} />
    
            <div className="flex items-center">
                <Skeleton width={30} h={30} />
                <Skeleton count={.5} />
            </div>
        </div>
    </div>
    );
};

export default TaskSkeleton;