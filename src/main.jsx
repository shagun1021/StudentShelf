import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Edu from "./Edu.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./Nav.jsx";
import HomeForm from "./HomeForm.jsx";
import Final from "./Final.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeForm />,
      },
      {
        path: "edu",
        element: <Edu />,
      },
      
    ],
  },
  {
    path:"/final",
    element:<Final/>
  }  
 
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
