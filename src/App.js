import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/Routes'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 5000}} />
    </div>
  );
}

export default App;
