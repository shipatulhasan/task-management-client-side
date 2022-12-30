import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../../api/uploadImage';
import { deleteTask, fetchTasks, updateTask } from '../../../Slices/taskSlice';
import UpdateTask from '../UpdateTask';
import DetailsTask from './DetailsTask';
import TaskCard from './TaskCard';

const MyTask = ({myTasks}) => {
    const {updateLoading,updateStatus,tasks} = useSelector(state=>state.tasks)
    const {userInfo} = useSelector(state=>state.auth)
    const [taskDetails,setTaskDetails] = useState({})
    const [existingTask,setExistingTask] = useState({})
    const[show,setShow]=useState(false)
    const[upShow,setUpShow]=useState(false)
    const navigate = useNavigate()
    
   
    const dispatch = useDispatch()
    useEffect(()=>{
        if(userInfo?.email||updateStatus){

            dispatch(fetchTasks(userInfo?.email))
        }
        
    },[updateStatus,userInfo?.email,dispatch])

    

    const handleInComplete = (_id)=>{
        const task = tasks.find(task=>task._id===_id)
        const permission = window.confirm(`Are your sure that ${task.title} is Incompleted`)
        if(permission){
            const post = {completed:false}
            dispatch(updateTask({post,_id}))
            // setUpdate(!update)
            navigate('/mytask')
        }
    }
    const handleComplete = (_id)=>{
        const task = tasks.find(task=>task._id===_id)
        const permission = window.confirm(`Are your sure that ${task.title} is completed`)
        if(permission){
            const post = {completed:true}
            dispatch(updateTask({post,_id}))
            // setUpdate(!update)
            navigate('/completed-task')
        }
    }
    const handleDelete = (id)=>{
        const task = tasks.find(task=>task._id===id)
        const permission = window.confirm(`would you like to delete ${task.title}`)
        if(permission){

            dispatch(deleteTask(id))
        }
    }
    const handleModal = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setExistingTask(task)
        setUpShow(!upShow)
        setShow(false)
    }
    const handleUpdate = (e,_id)=>{
        e.preventDefault()
        const date = new Date().toLocaleString("en-US")
        const form = e.target
        const title= form.title.value
        let post = {}

        if(form.image && form.details){
           const details= form.details.value
           const img = form.image.files[0];

           if(details === null){

               uploadImage(img).then((image) =>{
                 post = {
                   title,image:image.url,postDate:date
               }
               dispatch(updateTask({post,_id})) 
               })
           }
          else{
            uploadImage(img).then((image) =>{
                post = {
                  title,details,image:image.url,postDate:date
              }
              dispatch(updateTask({post,_id})) 
              })
          }
          }
          else if(form.image){
            const img = form.image.files[0];
            uploadImage(img).then((image) =>{
                post = {
                  title,image:image.url,postDate:date
              }
              dispatch(updateTask({post,_id})) 
              })
          }
          else if(form.details){
            const details= form.details.value
            post = {
                title,details,postDate:date
            }
            dispatch(updateTask({post,_id})) 
          }

        else{
            post = {
                title,postDate:date
            }
            dispatch(updateTask({post,_id})) 
        }

    }
    const handleDetails = (id)=>{
        const task = tasks.find(task=>task._id===id)
        setTaskDetails(task)
        setShow(!show)
    }

    
    const handleAddDetails = (e,_id)=>{
        e.preventDefault()
        const form = e.target
        const details= form.details.value
        const img = form.image.files[0];
        let post = {}

        if( details === '' && form.image.files.length===0){
            alert('please add the task information')
            return
        }
        if(form.image.files.length!==0 && details !== ''){
          uploadImage(img).then((image) =>{
            post = {
              details,image:image.url
          }
          dispatch(updateTask({post,_id}))
            form.reset()
          })
        }
       else if(form.image.files.length!==0 && details === ''){
            uploadImage(img).then((image) =>{
              post = {
             image:image.url
            }
            dispatch(updateTask({post,_id}))
            form.reset()
        
            })
          }
     
        else{

          post = {
            details
        }
        dispatch(updateTask({post,_id}))
        form.reset()
        }

        
    }

    return (
        // isLoading ? <TaskSkeleton /> :
        <div className='p-10'>
             <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                 {
                 myTasks.map(task=><TaskCard key={task._id} task={task} handleDetails={handleDetails} handleDelete={handleDelete} handleModal={handleModal} handleComplete={handleComplete} handleInComplete={handleInComplete} handleAddDetails={handleAddDetails} isLoading={updateLoading} />)
                 }
             
                 {
                     tasks&&<DetailsTask 
                     taskDetails={taskDetails}
                     setShow={setShow}
                     show={show}
                     handleDelete={handleDelete}
                     handleModal={handleModal}
                     handleComplete={handleComplete}
                    handleInComplete={handleInComplete}
                      />
                 }
                 {
                     tasks&&<UpdateTask 
                     task={existingTask}
                     setShow={setUpShow}
                     show={upShow}
                     isLoading={updateLoading}
                     hadleUpdate={handleUpdate}
                      />
                 }
               
             </div>
        
        </div>
    );
};

export default MyTask;