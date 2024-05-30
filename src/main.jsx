import React from "react";
import ReactDOM from "react-dom/client";
import Our_Services from "./Our_Services/Our_services.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Our_Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
