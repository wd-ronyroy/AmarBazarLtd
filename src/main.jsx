import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import HotSmartPhone from './pages/HotSmartPhone';
import Buy from './pages/Buy';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/buy",
    element: <Buy/>,
  },
 
  {
    path: "/hot-smartphone",
    element: <HotSmartPhone/>,
  },
  
 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
