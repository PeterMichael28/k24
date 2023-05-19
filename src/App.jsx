

import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Donate from './pages/Donate';


export const router = createBrowserRouter([
  {
    path: "/k24",
    element: <Home />
  },
  {
    path: "/k24/donate",
    element: <Donate />
  }
]);
