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
import Header from './Components/Navbar/Header';

const Layout = () => {
  return(
    <>
      <Header/>
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
