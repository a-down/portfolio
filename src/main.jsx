import React from 'react'
import ReactDOM from 'react-dom/client'
import { Portfolio, QuickMeasure } from './pages'
import Root from './Root'
import './index.css'
import { inject } from '@vercel/analytics';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

inject();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    // children: [
    //   {
    //     path: "quickmeasure",
    //     element: <QuickMeasure />,
    //   },
    //   {
    //     path: "*",
    //     element: <Portfolio />,
    //   },
    // ]
  },
  {
    path: "quickmeasure",
    element: <QuickMeasure />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Root />
  </React.StrictMode>,
)
