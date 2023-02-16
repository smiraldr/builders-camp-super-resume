import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import Feed from './pages/Feed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Feed",
    element: <Feed/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);






