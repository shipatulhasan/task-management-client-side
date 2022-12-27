import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { deleteTask, fetchTasks } from '../../../Slices/taskSlice';
import TaskCard from './TaskCard';
import TaskSkeleton from './TaskSkeleton';

const MyTask = () => {
    const {isLoading,tasks} = useSelector(state=>state.tasks)
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch])

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }

    return (
        <div className='p-10'>
             <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                 {
                     isLoading ? <TaskSkeleton /> :tasks.map(task=><TaskCard key={task._id} task={task} handleDelete={handleDelete} />)
                 }
               
             </div>
        
        </div>
    );
};

export default MyTask;