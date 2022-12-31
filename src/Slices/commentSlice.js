import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const postCommnet = createAsyncThunk('comments/postComment',async(comment)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/comment`,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(comment)
    })
    const data = await res.json()
    return data
    }
    catch(err){
        console.log(err.message)
        return err.message
    }
    
})
export const fetchCommnet = createAsyncThunk('comments/fetchComment',async(id)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/comment/${id}`)
    const data = await res.json()
    return data
    }

    catch(err){
        console.log(err.message)
        return err.message
    }
})

const commentSlice = createSlice({
    name:"comments",
    initialState:{
        commentLoading:false,
        comments:[],
        update:true,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCommnet.pending,(state)=>{
            state.commentLoading=true
        })
        builder.addCase(fetchCommnet.fulfilled,(state,action)=>{
            state.commentLoading=false
            state.update=false
            state.comments=action.payload
            state.error=null
        })
        builder.addCase(fetchCommnet.rejected,(state,action)=>{
            state.commentLoading=false
            state.error=action.err.message

        })
        builder.addCase(postCommnet.pending,(state)=>{
            state.commentLoading=true
        })
        builder.addCase(postCommnet.fulfilled,(state)=>{
            state.commentLoading=false
            state.update = true
            state.error=null
        })
        builder.addCase(postCommnet.rejected,(state,action)=>{
            state.commentLoading=false
            state.error=action.payload

        })
    }

})
export default commentSlice.reducer