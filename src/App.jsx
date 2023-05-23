

import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Donate from './pages/Donate';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/donate",
    element: <Donate />
  }
]);
