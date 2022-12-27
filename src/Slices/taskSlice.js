import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async()=>{
    const res = await fetch('http://localhost:5000/task')
    const data = await res.json()
    return data
})
export const createTask = createAsyncThunk('tasks/createTask',async(post)=>{
    const res = await fetch('http://localhost:5000/task',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })
    const data = await res.json()
    return data
})
export const deleteTask = createAsyncThunk('tasks/deleteTask',async(id)=>{
    const res = await fetch(`http://localhost:5000/task/${id}`,{
        method:'delete',
    })
    const data = await res.json()
    return data
})

const taskSlice = createSlice({
    name:'tasks',
    initialState:{
        isLoading:false,
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
        builder.addCase(deleteTask.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(deleteTask.fulfilled,(state,action)=>{
            state.isLoading=false
            const id = action.payload.id
            console.log(id)
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