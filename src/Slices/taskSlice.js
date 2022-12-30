import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async(email)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/task/${email}`)
    const data = await res.json()
    return data
    }
    catch(err){
        console.error(err.message)
    }
})
export const createTask = createAsyncThunk('tasks/createTask',async(post)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/task`,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })
    const data = await res.json()
    if(data.acknowledged){
        toast.success('Your post is added successfully')
    }
    return data
}
catch(err){
    console.error(err.message)
    toast.error('Something went wrong')
    }
})
export const updateTask = createAsyncThunk('tasks/updateTask',async({post,_id})=>{
    
   
    
    const res = await fetch(`${process.env.REACT_APP_api}/task/${_id}`,{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })
    const data = await res.json()
  
    if(data.result.modifiedCount>0){
        toast.success('Your task is updated successfully')
    }
    return data
})
export const deleteTask = createAsyncThunk('tasks/deleteTask',async(id)=>{
    const res = await fetch(`${process.env.REACT_APP_api}/task/${id}`,{
        method:'delete',
    })
    const data = await res.json()
    return data
})

const taskSlice = createSlice({
    name:'tasks',
    initialState:{
        isLoading:false,
        updateLoading:false,
        updateStatus:true,
        tasks:[],
        addTask:{},
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTasks.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchTasks.fulfilled,(state,action)=>{
            state.isLoading=false
            state.tasks=action.payload
            state.updateStatus=false
            state.error=null
        })
        builder.addCase(fetchTasks.rejected,(state,action)=>{
            state.isLoading=false
            state.tasks=[]
            state.error=action.error.message
        })
        builder.addCase(createTask.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(createTask.fulfilled,(state,action)=>{
            state.isLoading=false
            state.addTask=action.payload
            state.error=null
        })
        builder.addCase(createTask.rejected,(state,action)=>{
            state.isLoading=false
            state.addTask={}
            state.error=action.error.message
        })
        builder.addCase(updateTask.pending,(state)=>{
            state.updateLoading=true
        })
        builder.addCase(updateTask.fulfilled,(state,action)=>{
            state.updateLoading=false
            state.isLoading=false
            state.updateStatus=true
            state.error=null
        })
        builder.addCase(updateTask.rejected,(state,action)=>{
            state.updateLoading=false
            
            state.error=action.error.message
        })
        builder.addCase(deleteTask.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(deleteTask.fulfilled,(state,action)=>{
            state.isLoading=false
            const id = action.payload.id
            state.tasks=state.tasks.filter((task)=>task._id!==id)
            state.error=null
        })
        builder.addCase(deleteTask.rejected,(state,action)=>{
            state.isLoading=false
            state.tasks=[]
            state.error=action.error.message
        })
    },
   
})
export default taskSlice.reducer