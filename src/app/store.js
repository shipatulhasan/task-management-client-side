import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../Slices/taskSlice'
import authReducer from '../Slices/authSlice'
import userReducer from '../Slices/userSlice'


const store = configureStore({ 
    reducer:{
        tasks:taskReducer,
        auth:authReducer,
        user:userReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store