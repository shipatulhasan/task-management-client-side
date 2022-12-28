import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

export const saveUser = createAsyncThunk('user/saveUser',async(user)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/user`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        const data =await res.json()
        if(data.acknowledged){
            toast.success('Successfully registered')
            console.log(data)
        }
        return data
    }
    catch(err){
        console.error(err.message)
    }
})
// export const getToken = createAsyncThunk('user/token',async(email)=>{
//     try{
//         const res = await fetch(`${process.env.REACT_APP_api}/jwt?email=${email}`)
//         const data =await res.json()
//         console.log(data)
//         return data
//     }
//     catch(err){
//         console.error(err.message)
//     }
// })


const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        token:'',
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(saveUser.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(saveUser.fulfilled,(state)=>{
            state.isLoading=false
            state.error=null
        })
        builder.addCase(saveUser.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
        // builder.addCase(getToken.pending,(state)=>{
        //     state.isLoading=true
        // })
        // builder.addCase(getToken.fulfilled,(state,action)=>{
        //     state.isLoading=false
        //     const token = action.payload.token
        //     state.token = action.payload.token
        //     localStorage.setItem('task-token',token)
        //     state.error=null
        // })
        // builder.addCase(getToken.rejected,(state,action)=>{
        //     state.isLoading=false
        //     state.error=action.error.message
        // })
        
    }

})

export default userSlice.reducer