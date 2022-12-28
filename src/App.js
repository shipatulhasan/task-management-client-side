import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/Routes'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { authFunction } from './AuthProvider/AuthProvider';
import { useDispatch } from 'react-redux';
import { logIn } from './Slices/authSlice';
function App() {
  const {onAuthStateChanged,auth} = authFunction
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      dispatch(logIn(currentUser))
     
  })
  return ()=>unsubscribe()

  },[])
  return (
    <div className='max-w-[1240px] mx-auto'>
      <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 5000}} />
    </div>
  );
}

export default App;
