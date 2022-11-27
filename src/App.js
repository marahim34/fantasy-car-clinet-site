import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto pt-[-2.5rem]'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
