import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../Slices/taskSlice';
import LoaderText from '../Shared/Spinner/LoaderText'

const AddTaskTittle = () => {
    // const [task,setTask] = useState('')
    const {userInfo} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.tasks)

    const handleSubmit = (e)=>{
        const date = new Date().toLocaleString("en-US")
        const title = e.target.value
        const post = {
            email:userInfo?.email,title,postDate:date
        }
       

        if (e.key === "Enter") {

            if(title === ''){
                alert('please add the task')
                return
            }
            console.log(title)
            dispatch(createTask(post))
            e.target.value=''

        }
    }

    return (
        <div className="flex justify-center items-center min-h-[60vh] py-10 px-4">
        <div className="w-full bg-opacity-50 bg-white max-w-md p-8 text-gray-800 border border-slate-200 shadow-xl shadow-slate-300 z-10 space-y-6">
        <div className='flex items-center gap-3'>
          <h2 className='text-3xl font-bold text-blue-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                Add Task
            </h2>
            <div className='h-[2px] w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1'/>
          </div>
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]'>

                <input
                className="w-full px-4 py-3 text-gray-800 border focus:outline-none rounded "
                onKeyDown={(e)=>handleSubmit(e)}
                type="text"
                name='title'
                placeholder={isLoading?'processing...':"task name..."}
                required
              />
            </div>
        </div>
        </div>
    );
};

export default AddTaskTittle;