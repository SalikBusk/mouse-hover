import React from 'react';
import './App.css';

// router
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

// pages
import Index from './Pages/Index';

const Layout = () => {
  return(
    <>
      <Outlet/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Index/>,
      }
    ],
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
