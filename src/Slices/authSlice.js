
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

export const saveUser = createAsyncThunk('auth/saveUser',async(user)=>{
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
export const getToken = createAsyncThunk('auth/token',async(user)=>{
    try{
        const res = await fetch(`${process.env.REACT_APP_api}/jwt`)
        const data =await res.json()
        return data
    }
    catch(err){
        console.error(err.message)
    }
})
export const uploadImage = createAsyncThunk('auth/image',async(image)=>{
    try{
        const formData = new FormData()
    formData.append('image',image)
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`,{
        method:'post',
        body:formData
    })
    const data = await res.json()
    console.log(data.data)
    return data.data
    }
    catch(err){
        console.error(err.message)
    }
})




const authSlice = createSlice({
    name:'auth',
    initialState:{
        userInfo:{},
        isLoading:true,
        image:'',
        error:null

    },
    reducers:{
        logIn:(state,action)=>{
            state.userInfo=action.payload
            state.isLoading=false
        },
        logOut:(state)=>{
            state.userInfo={}
            state.isLoading=false
        },
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
        builder.addCase(uploadImage.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(uploadImage.fulfilled,(state,action)=>{
            state.isLoading=false
            state.image=action.payload
            state.error=null
        })
        builder.addCase(uploadImage.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
    
})

export const {logIn,logOut} = authSlice.actions

export default authSlice.reducer