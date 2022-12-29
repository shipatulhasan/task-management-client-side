import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { deleteTask, fetchTasks, updateTask } from '../../../Slices/taskSlice';
import UpdateTask from '../UpdateTask';
import DetailsTask from './DetailsTask';
import TaskCard from './TaskCard';
import TaskSkeleton from './TaskSkeleton';

const MyTask = ({myTasks}) => {
    const {isLoading,tasks} = useSelector(state=>state.tasks)
    const {userInfo} = useSelector(state=>state.auth)
    const [taskDetails,setTaskDetails] = useState({})
    const [existingTask,setExistingTask] = useState({})
    const[show,setShow]=useState(false)
    const[upShow,setUpShow]=useState(false)
    const [update,setUpdate] = useState(false)
    
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks(userInfo?.email))
    },[dispatch,update,userInfo?.email])

    

    const handleInComplete = (_id)=>{
        const task = tasks.find(task=>task._id===_id)
        const permission = window.confirm(`Are your sure that ${task.title} is Incompleted`)
        if(permission){
            const post = {completed:false}
            dispatch(updateTask({post,_id}))
            setUpdate(!update)
        }
    }
    const handleComplete = (_id)=>{
        const task = tasks.find(task=>task._id===_id)
        const permission = window.confirm(`Are your sure that ${task.title} is completed`)
        if(permission){
            const post = {completed:true}
            dispatch(updateTask({post,_id}))
            setUpdate(!update)
        }
    }
    const handleDelete = (id)=>{
        const task = tasks.find(task=>task._id===id)
        const permission = window.confirm(`would you like to delete ${task.title}`)
        if(permission){

            dispatch(deleteTask(id))
        }
    }
    const handleUpdate = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setExistingTask(task)
        setUpShow(!upShow)
        setShow(false)
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

        dispatch(updateTask({post,_id}))
        setUpdate(!update)
        setUpShow(false)
        

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
                     isLoading ? <TaskSkeleton /> :myTasks.map(task=><TaskCard key={task._id} task={task} handleDetails={handleDetails} handleDelete={handleDelete} handleUpdate={handleUpdate} handleComplete={handleComplete} handleInComplete={handleInComplete} />)
                 }
                 {
                     tasks&&<DetailsTask 
                     taskDetails={taskDetails}
                     setShow={setShow}
                     show={show}
                     handleDelete={handleDelete}
                     handleUpdate={handleUpdate}
                     handleComplete={handleComplete}
                    handleInComplete={handleInComplete}
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