
import { createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'auth',
    initialState:{
        userInfo:{},
        isLoading:true,
        error:null,
        token:''

    },
    reducers:{
        logIn:(state,action)=>{
            state.userInfo=action.payload
            state.isLoading=false
        },
        logout:(state)=>{
            state.userInfo={}
            state.isLoading=false
        },
    },
  
    
})

export const {logIn,logout} = authSlice.actions

export default authSlice.reducer