import { getAuth } from "firebase/auth";
import {createSlice} from '@reduxjs/toolkit'
import {app} from '../firebase/firebase.init'

const auth = getAuth(app)

const authSlice = createSlice({
    name:'auth',
    
})