import React from "react";
import ReactDOM from "react-dom/client";
import Our_Services from "./Our_Services/Our_services.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import About_us from "./About_us/About_us.jsx";
import Network from "./About_us/Network.jsx";
import Growth_story from "./About_us/Growth_story.jsx";

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
  {
    path: "/about_us",
    element: <About_us />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/growth_story",
    element: <Growth_story/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
