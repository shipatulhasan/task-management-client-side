import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../Slices/taskSlice'
import authReducer from '../Slices/authSlice'
import userReducer from '../Slices/userSlice'
import commentReducer from '../Slices/commentSlice'


const store = configureStore({ 
    reducer:{
        tasks:taskReducer,
        auth:authReducer,
        user:userReducer,
        comment:commentReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store