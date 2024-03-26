import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Header from './components/header'
import ActiveListing from "./components/ActiveListings";
import CreatListing from "./components/creatListing"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path:"activeListing",
    element:
    <>
      <Header/>
      <ActiveListing/>
    </>
  },
  {
    path:"creatListing",
    element: 
    <>
      <Header/>
      <CreatListing/>
    </>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);