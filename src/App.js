import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/Routes'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { authFunction } from './AuthProvider/AuthProvider';
import { useDispatch } from 'react-redux';
import { logIn } from './Slices/authSlice';
import pattern from './asset/pattern.svg'
import bg from './asset/hero.jpg'
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
    <div className='relative  min-h-screen h-full  backdrop-blur-3xl bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${bg})`}}>
   
      <div className='absolute w-full h-full bg-center backdrop-blur-3xl inset-0 z-[-1]' style={{backgroundImage:`url(${pattern})`}}/>
      
     <div className='max-w-[1240px] mx-auto'>
     <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 3000}} />
     </div>
    </div>
  );
}

export default App;
