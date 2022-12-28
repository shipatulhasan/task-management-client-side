import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { deleteTask, fetchTasks } from '../../../Slices/taskSlice';
import UpdateTask from '../UpdateTask';
import DetailsTask from './DetailsTask';
import TaskCard from './TaskCard';
import TaskSkeleton from './TaskSkeleton';

const MyTask = () => {
    const {isLoading,tasks} = useSelector(state=>state.tasks)
    const [taskDetails,setTaskDetails] = useState({})
    const [existingTask,setExistingTask] = useState({})
    const[show,setShow]=useState(false)
    const[upShow,setUpShow]=useState(false)
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch])

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }
    const handleUpdate = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setExistingTask(task)
        setUpShow(!upShow)
    }
    const handleDetails = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setTaskDetails(task)
        setShow(!show)
    }

    return (
        <div className='p-10'>
             <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                 {
                     isLoading ? <TaskSkeleton /> :tasks.map(task=><TaskCard key={task._id} task={task} handleDetails={handleDetails} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
                 }
                 {
                     tasks&&<DetailsTask 
                     taskDetails={taskDetails}
                     setShow={setShow}
                     show={show}
                     handleDelete={handleDelete}
                     handleUpdate={handleUpdate}
                      />
                 }
                 {
                     tasks&&<UpdateTask 
                     task={existingTask}
                     setShow={setUpShow}
                     show={upShow}
                      />
                 }
               
             </div>
        
        </div>
    );
};

export default MyTask;