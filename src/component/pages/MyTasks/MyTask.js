import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { deleteTask, fetchTasks, updateTask } from '../../../Slices/taskSlice';
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
    const [update,setUpdate] = useState(false)
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch,update])

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }
    const handleUpdate = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setExistingTask(task)
        console.log(task)
        setUpShow(!upShow)
    }
    const hadleSubmit = (e,_id)=>{
        e.preventDefault()
        const date = new Date().toLocaleString("en-US")
        const form = e.target
        const title= form.title.value
        const details= form.details.value
        const post = {
            title,details,postDate:date
        }
        console.log(post)

        dispatch(updateTask({post,_id}))
        setUpdate(!update)
        

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
                     isLoading={isLoading}
                     hadleSubmit={hadleSubmit}
                      />
                 }
               
             </div>
        
        </div>
    );
};

export default MyTask;