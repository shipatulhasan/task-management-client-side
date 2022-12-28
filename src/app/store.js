import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../Slices/taskSlice'
import authReducer from '../Slices/authSlice'


const store = configureStore({ 
    reducer:{
        tasks:taskReducer,
        auth:authReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store