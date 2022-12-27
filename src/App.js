import './App.css';
import { RouterProvider } from 'react-router-dom';
import {router} from './Router/Routes'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster toastOptions={{ duration: 5000}} />
    </>
  );
}

export default App;
